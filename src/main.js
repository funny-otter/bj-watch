import './styles.css';
import {
  conceptEntries,
  curatedActivity,
  curatedSignals,
  protocolCategories,
  protocolUpdates,
  siteChanges,
  watchQueue,
} from './data.js';

const crumbMap = {
  overview: 'overview',
  health: '~/health',
  longevity: '~/longevity',
  nutrition: '~/nutrition',
  sleep: '~/sleep',
  concepts: '~/concepts',
  metrics: '$metrics',
  changelog: '$changelog',
};

const navGroups = [
  { label: '// feed', items: [{ tab: 'overview', prefix: '$', label: 'overview', badge: curatedSignals.length }] },
  {
    label: '// protocols',
    items: protocolCategories.map((p) => ({ tab: p.category, prefix: '~/', label: p.category, badge: p.sections.habits.length + p.sections.longterm.length + p.sections.donts.length })),
  },
  { label: '// reference', items: [{ tab: 'concepts', prefix: '~/', label: 'concepts', badge: conceptEntries.length }] },
  { label: '// signal', items: [{ tab: 'metrics', prefix: '$', label: 'metrics', badge: curatedActivity.length }, { tab: 'changelog', prefix: '$', label: 'changelog', badge: protocolUpdates.length + siteChanges.length }] },
];

const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[ch]));
const topicClass = (topic = '') => topic.toLowerCase().includes('sleep') ? 'sleep' : topic.toLowerCase().includes('nutrition') ? 'nutrition' : topic.toLowerCase().includes('health') || topic.toLowerCase().includes('protocol') ? 'health' : topic.toLowerCase().includes('training') ? 'train' : '';
const formatDate = (date) => {
  const d = new Date(`${date}T12:00:00Z`);
  return `${String(d.getUTCMonth() + 1).padStart(2, '0')}.${String(d.getUTCDate()).padStart(2, '0')}<br>${d.getUTCFullYear()}`;
};
const todayStamp = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()).replace(',', ' ·') + ' PT';

function renderNav() {
  return navGroups.map((group) => `
    <div class="nav-group">
      <div class="nav-label">${group.label}</div>
      ${group.items.map((item) => `
        <button class="nav-item ${item.tab === 'overview' ? 'active' : ''}" data-tab="${item.tab}">
          <span><span class="prefix">${item.prefix}</span>${item.label}</span>
          <span class="badge">${item.badge}</span>
        </button>
      `).join('')}
    </div>`).join('');
}

function renderOverview() {
  const topicCounts = curatedSignals.reduce((acc, s) => (acc[s.topic] = (acc[s.topic] || 0) + 1, acc), {});
  const max = Math.max(...Object.values(topicCounts));
  return `
    <section class="page active" data-page="overview">
      <div class="head-row"><h1>Latest signal</h1><span class="meta">last update from curated feed · ${curatedSignals.length} entries</span></div>
      <div class="filters" aria-label="overview filters">
        ${['all', 'biomarkers', 'sleep', 'nutrition', 'training', 'protocols', 'experiments'].map((f, i) => `<button class="filt ${i === 0 ? 'on' : ''}" data-filter="${f}">${f}</button>`).join('')}
      </div>
      <div class="ov-grid">
        <div class="feed-table" id="feed-table">
          <div class="feed-head"><span>time</span><span>tag</span><span>content</span><span>engagement</span></div>
          ${curatedSignals.map((s) => `
            <article class="feed-row" data-topic="${esc(s.topic)}">
              <div class="time">${formatDate(s.date)}</div>
              <div class="tag ${topicClass(s.topic)}">${esc(s.badge)}</div>
              <div class="text"><strong>${esc(s.title)}</strong><br>${esc(s.summary)}</div>
              <div class="eng"><span><b>${esc(s.confidence)}</b> confidence</span><span>source-aware seed</span></div>
            </article>`).join('')}
        </div>
        <aside class="ov-side">
          <div class="ov-card"><h3>Topic mix · curated</h3><div class="topic-list">
            ${Object.entries(topicCounts).map(([label, count]) => `<div class="topic-row"><span>${esc(label)}</span><span>${count}</span><i class="bar-bg"><b style="width:${Math.round((count / max) * 100)}%"></b></i></div>`).join('')}
          </div></div>
          <div class="ov-card"><h3>Activity · source files</h3><div class="heat" id="heat">${Array.from({ length: 35 }, (_, i) => `<i class="lv${i % 5}"></i>`).join('')}</div><p class="note">Rendered from curated source activity, not live social telemetry.</p></div>
          <div class="ov-card"><h3>Next watch</h3>${watchQueue.map((w) => `<p class="watch"><strong>${esc(w.title)}</strong><br>${esc(w.summary)}<br><span>${esc(w.eta)}</span></p>`).join('')}</div>
        </aside>
      </div>
    </section>`;
}

function habitMeta(category, index) {
  const slots = {
    health: [
      ['morning', '3–6 mo labs'],
      ['evening', 'nightly'],
      ['all day', 'daily'],
      ['all day', 'each meal'],
      ['morning/evening', 'daily'],
    ],
    longevity: [
      ['all day', 'daily'],
      ['all day', '6 hr/wk'],
      ['morning', 'weekly review'],
      ['morning', 'routine checks'],
      ['all day', 'daily'],
    ],
    nutrition: [
      ['all day', 'each meal'],
      ['all day', 'daily target'],
      ['evening', '4 hr pre-bed'],
      ['morning', 'review data'],
      ['all day', 'cycle-aware'],
    ],
    sleep: [
      ['evening', 'nightly'],
      ['evening', '4 hr pre-bed'],
      ['evening', '60 min'],
      ['evening', 'nightly'],
      ['morning', '15–30 min'],
    ],
  };
  return (slots[category] || [['all day', 'daily']])[index] || ['all day', 'source-aware'];
}

function habitTitle(text) {
  const [first] = text.split(':');
  return first.length < 76 ? first : text.slice(0, 70) + '…';
}

function renderProtocol(p) {
  return `
    <section class="page" data-page="${p.category}">
      <div class="head-row"><h1>${esc(p.title)}</h1><span class="meta">confidence ${esc(p.confidence)} · habits/objectives/forbidden separated</span></div>
      <p class="lead">${esc(p.lede)} <em>Medical caution:</em> this summarizes public Bryan Johnson/Blueprint claims and source trails, not personal advice.</p>
      <div class="habit-list" id="${p.category}-habits-wrap">
        <div class="habit-head"><span>idx</span><span>when</span><span>habit</span></div>
        ${p.sections.habits.map((h, i) => {
          const [time, dose] = habitMeta(p.category, i);
          return `<div class="habit">
            <span class="id">[${String(i + 1).padStart(2, '0')}]</span>
            <span class="h-time">${esc(time)}<br><span class="h-dose-inline">${esc(dose)}</span></span>
            <span><b class="h-title">${esc(habitTitle(h))}</b><span class="h-desc">${esc(h)}</span><span class="h-why">Kept source-aware and confidence-bounded; exact dose targets are omitted unless verified.</span></span>
          </div>`;
        }).join('')}
      </div>
      <div class="two">
        <div class="panel"><h3>Long-term objectives</h3>
          ${p.sections.longterm.map((obj, i) => `<div class="obj"><span class="target">target ${String(i + 1).padStart(2, '0')}</span><span class="text">${esc(obj)}</span></div>`).join('')}
        </div>
        <div class="panel"><h3>Forbidden</h3>
          ${p.sections.donts.map((dont) => `<div class="dont">${esc(dont)}</div>`).join('')}
        </div>
      </div>
      <p class="source-line">source trails: ${p.sourcePaths.map(esc).join(' · ')}</p>
    </section>`;
}

function renderConcepts() {
  const filters = ['all', 'health', 'longevity', 'nutrition', 'sleep', 'training', 'biomarkers', 'experiments'];
  return `
    <section class="page" data-page="concepts">
      <div class="head-row"><h1>Concepts · glossary</h1><span class="meta">${conceptEntries.length} entries · source-aware</span></div>
      <p class="lead">Reference layer for recurring feed terms. Mention counts are omitted until live ingestion exists.</p>
      <div class="filters" id="concept-filters">${filters.map((f, i) => `<button class="filt ${i === 0 ? 'on' : ''}" data-f="${f}">${f}</button>`).join('')}</div>
      <div class="concept-grid" id="concept-grid">
        ${conceptEntries.map((c) => `<article class="concept" data-tags="${c.tags.map(esc).join(' ')}">
          <div class="top"><span class="term">${esc(c.title)}</span><span class="right"><span class="badge disc">${esc(c.confidence)}</span></span></div>
          <p class="short">${esc(c.summary)}</p><p class="voice">${esc(c.summary)}</p><p class="why"><b>Why</b> ${esc(c.why)}</p>
          <div class="tags">${c.tags.map((t) => `<span class="ctag">${esc(t)}</span>`).join('')}</div>
        </article>`).join('')}
      </div>
    </section>`;
}

function renderMetrics() {
  const max = Math.max(...curatedActivity.map((d) => d.x_post + d.third_party + d.wiki_update + d.site_update));
  const totalSignals = curatedActivity.reduce((sum, d) => sum + d.x_post + d.third_party, 0);
  const totalUpdates = curatedActivity.reduce((sum, d) => sum + d.wiki_update + d.site_update, 0);
  return `
    <section class="page" data-page="metrics">
      <div class="head-row"><h1>Posting telemetry</h1><span class="meta">cadence · topics · source activity</span></div>
      <p class="lead">This page renders a telemetry shell using curated source activity. Engagement/follower stats are visibly placeholder until live ingestion exists.</p>
      <div class="chart-card"><h3>Daily posts</h3><p>curated source activity, not verified platform analytics</p><div class="chart-wrap"><div class="y-axis"><span>${max}</span><span>${Math.ceil(max / 2)}</span><span>0</span></div><div class="chart">${curatedActivity.map((d, i) => `<i class="bar ${i % 2 ? 'weekend' : ''}" style="height:${Math.max(12, ((d.x_post + d.third_party + d.wiki_update + d.site_update) / max) * 100)}%"></i>`).join('')}</div></div><div class="chart-x">${curatedActivity.map((d) => `<span>${d.date.slice(5)}</span>`).join('')}</div><div class="chart-summary"><div class="csum"><b>${totalSignals}</b><span>public signals</span></div><div class="csum"><b>${totalUpdates}</b><span>wiki/site updates</span></div><div class="csum"><b>n/a</b><span>likes/post</span></div><div class="csum"><b>n/a</b><span>followers</span></div></div></div>
      <div class="metrics-grid"><div class="chart-card"><h3>Topic mix · 30d</h3><div class="topicbar"><i style="width:32%"></i><i style="width:24%"></i><i style="width:20%"></i><i style="width:14%"></i><i style="width:10%"></i></div><div class="topic-legend"><span class="legend-i">health</span><span class="legend-i">nutrition</span><span class="legend-i">sleep</span><span class="legend-i">longevity</span><span class="legend-i">claims</span></div></div><div class="chart-card"><h3>Engagement · 30d</h3><div class="gstats"><div class="gstat"><b>pending</b><span>replies/post</span></div><div class="gstat"><b>pending</b><span>likes/post</span></div><div class="gstat"><b>pending</b><span>reposts/post</span></div><div class="gstat"><b>pending</b><span>followers</span></div></div></div></div>
    </section>`;
}

function renderChangelog() {
  return `
    <section class="page" data-page="changelog">
      <div class="head-row"><h1>Changelog</h1><span class="meta">protocol updates + site updates</span></div>
      <p class="lead">Two streams. Protocol updates are changes Bryan announced about his routine. Site changelog tracks what changed on this tracker.</p>
      <div class="filters" id="clog-tabs"><button class="filt on" data-c="protocol">protocol updates · ${protocolUpdates.length}</button><button class="filt" data-c="site">site changelog · ${siteChanges.length}</button></div>
      <div class="clog" data-clog="protocol"><div class="clog-head"><span>date</span><span>kind</span><span>change</span></div>${protocolUpdates.map((u) => `<div class="row"><span class="d">${esc(u.date)}</span><span class="v">${esc(u.kind)}</span><span class="t"><span class="add">tracked</span> ${esc(u.change)}</span></div>`).join('')}</div>
      <div class="clog" data-clog="site" style="display:none"><div class="clog-head"><span>date</span><span>ver</span><span>change</span></div>${siteChanges.map((u) => `<div class="row"><span class="d">${esc(u.date)}</span><span class="v">${esc(u.version)}</span><span class="t">${esc(u.change)}</span></div>`).join('')}</div>
    </section>`;
}

function renderApp() {
  document.getElementById('app').innerHTML = `
    <div class="app">
      <button class="scrim" aria-label="close menu"></button>
      <aside class="side"><div class="brand"><div class="row"><span class="logo-box"></span><span class="ttl">BJ.WATCH</span></div><p class="ver">v0.4 · auto-updated daily<br>tracking since Jan 2024</p></div>${renderNav()}<div class="stat-mini"><span>POSTS / 30D</span><b>source-aware</b><small>live social metrics pending</small></div></aside>
      <main class="main"><div class="topbar"><button class="menu-btn" aria-label="open menu">☰</button><div class="crumb">~/ <span class="sep">/</span> bj.watch <span class="sep">/</span> <span class="cur" id="crumb">overview</span></div><div class="right"><span class="pulse"></span><span class="ok">live</span><span>${todayStamp()}</span></div></div>${renderOverview()}${protocolCategories.map(renderProtocol).join('')}${renderConcepts()}${renderMetrics()}${renderChangelog()}</main>
    </div>`;
}

function activate(tab) {
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.tab === tab));
  document.querySelectorAll('.page').forEach((page) => page.classList.toggle('active', page.dataset.page === tab));
  document.getElementById('crumb').textContent = crumbMap[tab] || tab;
  document.querySelector('.main').scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('.app').classList.remove('menu-open');
}

function bindEvents() {
  document.querySelectorAll('.nav-item').forEach((item) => item.addEventListener('click', () => activate(item.dataset.tab)));
  document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.app').classList.add('menu-open'));
  document.querySelector('.scrim').addEventListener('click', () => document.querySelector('.app').classList.remove('menu-open'));
  document.querySelectorAll('[data-filter]').forEach((filt) => filt.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((x) => x.classList.remove('on'));
    filt.classList.add('on');
    const value = filt.dataset.filter;
    document.querySelectorAll('.feed-row').forEach((row) => { row.hidden = value !== 'all' && row.dataset.topic !== value; });
  }));
  document.querySelectorAll('#concept-filters .filt').forEach((filt) => filt.addEventListener('click', () => {
    document.querySelectorAll('#concept-filters .filt').forEach((x) => x.classList.remove('on'));
    filt.classList.add('on');
    document.querySelectorAll('.concept').forEach((card) => { card.hidden = filt.dataset.f !== 'all' && !card.dataset.tags.split(' ').includes(filt.dataset.f); });
  }));
  document.querySelectorAll('#clog-tabs .filt').forEach((t) => {
    t.addEventListener('click', () => {
      document.querySelectorAll('#clog-tabs .filt').forEach((x) => x.classList.remove('on'));
      t.classList.add('on');
      document.querySelectorAll('[data-clog]').forEach((el) => {
        el.style.display = el.dataset.clog === t.dataset.c ? '' : 'none';
      });
    });
  });
}

renderApp();
bindEvents();

import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const data = readFileSync(new URL('../src/data.js', import.meta.url), 'utf8');
const css = readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8');

for (const tab of ['overview', 'health', 'longevity', 'nutrition', 'sleep', 'concepts', 'metrics', 'changelog']) {
  assert.match(main + data, new RegExp(`\\b${tab}\\b`), `missing ${tab} tab/page source`);
}

for (const protocol of ['health', 'longevity', 'nutrition', 'sleep']) {
  assert.match(data, new RegExp(`category: '${protocol}'`), `missing ${protocol} protocol data`);
}

const habitListIndex = main.indexOf('class="habit-list"');
const longtermIndex = main.indexOf('<h3>Long-term objectives</h3>');
const forbiddenIndex = main.indexOf('<h3>Forbidden</h3>');
assert.ok(habitListIndex !== -1, 'protocol pages must render a dedicated habit-list');
assert.ok(longtermIndex > habitListIndex, 'Long-term objectives must render after habit-list');
assert.ok(forbiddenIndex > longtermIndex, 'Forbidden panel must render separately after Long-term objectives');
assert.match(main, /<div class="habit-head"><span>idx<\/span><span>when<\/span><span>habit<\/span><\/div>/, 'habit list must use idx | when | habit header');
assert.match(main, /\['morning', 'daily check'\]/, 'habit timing must show daily when label with duration below it');
assert.doesNotMatch(main, /\['AM', 'measure'\]/, 'habit timing must not use abbreviated AM/measure placeholder');
assert.doesNotMatch(main, /\['morning', '3–6 mo labs'\]/, 'periodic lab cadence belongs in long-term objectives, not daily habits');
assert.match(css, /\.dont::before\s*\{[^}]*content:\s*['"]FORBID['"]/s, 'Forbidden rows must use FORBID badge');
assert.doesNotMatch(main + data, /bucket table|bucket-table|combined/i, 'must not include a combined bucket table');

const clogButtons = [...main.matchAll(/<button class="filt(?: on)?" data-c="(protocol|site)">/g)].map((m) => m[1]);
assert.deepEqual(clogButtons.sort(), ['protocol', 'site'], 'changelog must expose exactly protocol and site tabs');
assert.equal(clogButtons.length, 2, 'changelog must have exactly two tab buttons');
assert.match(main, /data-clog="protocol"/, 'missing protocol changelog stream');
assert.match(main, /data-clog="site" style="display:none"/, 'missing hidden site changelog stream');

console.log('structure checks passed: tabs, separated protocol layout, and two-tab changelog verified');

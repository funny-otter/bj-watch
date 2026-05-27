export const protocolCategories = [
  {
    category: 'health',
    title: 'Health protocol',
    lede: 'A source-aware view of Blueprint health routines: measurement, sleep consistency, oral care, exercise, nutrition basics, and caution around experimental or N=1 claims.',
    confidence: 'mixed',
    sourcePaths: ['concepts/blueprint-protocol.md', 'entities/project-blueprint.md', 'concepts/algorithmic-health.md'],
    sections: {
      habits: [
        'Run the measurement loop: bloodwork, wearables, oral/skin/organ metrics, then retest instead of relying on vibes.',
        'Keep the stable inputs visible first: consistent sleep, training, nutrient-dense meals, oral care, light exposure, and recovery.',
      ],
      longterm: [
        'Treat Blueprint as a repeatable feedback system whose rules can evolve as biomarkers, symptoms, or evidence change.',
        'Preserve medical-caution framing: this page summarizes Johnson/Blueprint practice, not personal treatment advice.',
      ],
      donts: [
        'Do not present N=1 biomarker movement as proof of clinical outcomes.',
        'Do not mix experimental drugs, hormones, or supplements into the same confidence tier as sleep, exercise, and food quality.',
      ],
    },
  },
  {
    category: 'longevity',
    title: 'Longevity protocol',
    lede: 'Longevity pages distinguish measured healthspan practices, biomarker claims, public critiques, and low-confidence aspirational claims such as immortality by 2039.',
    confidence: 'mixed',
    sourcePaths: ['concepts/immortality-by-2039.md', 'concepts/biomarker-driven-longevity-protocols.md'],
    sections: {
      habits: [
        'Prioritize measured healthspan basics: exercise, sleep regularity, nutrition, risk-factor monitoring, and clinician-guided prevention.',
        'Read biological-age and speed-of-aging numbers as tracked claims with source trails and critique links nearby.',
      ],
      longterm: [
        'Separate durable healthspan practices from frontier enhancement, drug-stack, gene-therapy, and immortality narratives.',
        'Keep critiques visible so biomarker improvements do not become unsupported longevity promises.',
      ],
      donts: [
        'Do not render “immortality by 2039” as a realistic forecast or medical endpoint.',
        'Do not collapse Johnson’s ideology, Blueprint marketing, and independent evidence into one confidence level.',
      ],
    },
  },
  {
    category: 'nutrition',
    title: 'Nutrition protocol',
    lede: 'Nutrition coverage focuses on source-backed themes: nutrient-dense plant-led meals, earlier eating, Blueprint products, microplastics claims, and metabolic-drug commentary with medical caution.',
    confidence: 'medium',
    sourcePaths: ['entities/project-blueprint.md', 'concepts/blueprint-protocol.md'],
    sections: {
      habits: [
        'Emphasize food quality and repeatability: plant-led meals, legumes/vegetables/healthy fats, earlier eating, and consistent prep.',
        'Pair product or testing claims with source paths so readers can distinguish Blueprint marketing from independent evidence.',
      ],
      longterm: [
        'Keep nutrition as one input in the measurement loop rather than a standalone promise of rejuvenation.',
        'Update exact calories, macros, and meal windows only when a current source supports the number.',
      ],
      donts: [
        'Do not publish prototype calorie, macro, supplement-dose, or eating-window numbers as universal targets.',
        'Do not treat metabolic-drug analogies or microplastics product claims as clinician guidance.',
      ],
    },
  },
  {
    category: 'sleep',
    title: 'Sleep protocol',
    lede: 'Sleep coverage uses tweet-backed and protocol-backed material: bedtime consistency, sleep front-loading, wearable/biological-age framing, and caveats around exact metrics.',
    confidence: 'medium',
    sourcePaths: ['concepts/blueprint-protocol.md', 'raw/articles/bryan-johnson/x-twitter-daily-2026-05-25.md'],
    sections: {
      habits: [
        'Keep bedtime consistency as the central behavior signal, with Johnson’s own “go to bed on time” framing.',
        'Use front-loading sleep before planned late nights as a source-backed example, not as a universal rule.',
      ],
      longterm: [
        'Frame sleep as a durable foundation feeding the broader biomarker and recovery system.',
        'Add exact wearable targets only after source verification and keep them in claims/measurement context.',
      ],
      donts: [
        'Do not publish unsourced sleep score, REM, HRV, or wake-event targets.',
        'Do not imply one nap or one night can fully “repay” circadian disruption.',
      ],
    },
  },
];

export const curatedSignals = [
  { title: 'Sleep front-loading before a planned late night', date: '2026-05-24', badge: 'Sleep', topic: 'sleep', summary: 'Johnson described going to bed early before knowingly breaking his 8pm bedtime. Treat it as a personal protocol tactic, not universal sleep advice.', confidence: 'medium' },
  { title: 'Enhanced Games framed as supervised, measured human enhancement', date: '2026-05-24', badge: 'Media', topic: 'training', summary: 'Johnson said he would cover the Enhanced Games as a Human Enhancement Expert, emphasizing measurements and medical supervision. This is his framing, not independent safety validation.', confidence: 'medium' },
  { title: 'Kate Tolo protocol adds endometriosis-oriented evaluation', date: '2026-05-23', badge: 'Protocol', topic: 'health', summary: 'Material referenced ultrasound, MRI, hormonal labs, and cycle-aware baseline work. Read as protocol documentation, not clinical guidance.', confidence: 'medium' },
  { title: 'Retatrutide compared to a frontier AI model for the body', date: '2026-05-22', badge: 'Claim', topic: 'nutrition', summary: 'A tweet-derived note compares retatrutide to frontier AI. Keep this in the claims/explainer bucket; metabolic drugs require clinician guidance.', confidence: 'low' },
  { title: 'Female-specific Blueprint baseline starts with Kate Tolo', date: '2026-05-19', badge: 'Protocol', topic: 'protocols', summary: 'A three-month, cycle-aware baseline was announced with data promised publicly. The source is tweet/third-party reporting, not a completed protocol paper.', confidence: 'medium' },
  { title: 'Microplastics testing becomes a Blueprint product theme', date: '2026-05-07', badge: 'Testing', topic: 'nutrition', summary: 'Johnson tied an N=1 microplastics reduction claim to sauna, reverse-osmosis water, and plastic avoidance while Blueprint marketed a blood test. Causality remains unverified here.', confidence: 'medium' },
  { title: 'Blueprint starts certifying partner products', date: '2026-05-15', badge: 'Marketplace', topic: 'health', summary: 'Blueprint launched certified partner products, initially naming Eight Sleep and Plunge Sauna. Useful as marketplace context, not proof of clinical outcomes.', confidence: 'medium' },
  { title: "Blueprint recast as Don't Die infrastructure", date: '2026-05-12', badge: 'Positioning', topic: 'experiments', summary: "Johnson said he nearly shut down Blueprint to focus on Don't Die, then positioned Blueprint as the practical company layer of that ideology.", confidence: 'medium' },
];

export const watchQueue = [
  { title: 'Enhanced Games follow-up', summary: "Watch for independent reporting/results and whether medical-supervision claims are corroborated beyond Johnson's framing.", eta: 'next public results cycle' },
  { title: 'Kate Tolo baseline', summary: 'Watch for published baseline measurements, cycle-phase details, and careful separation between N=1 observation and advice.', eta: 'baseline updates' },
  { title: 'Microplastics testing', summary: 'Watch for evidence behind the claimed N=1 reduction and product validation for the Blueprint blood test.', eta: 'test validation' },
];

export const conceptEntries = [
  { title: 'Blueprint Protocol', confidence: 'medium', tags: ['health', 'nutrition', 'sleep'], summary: 'The measurement-led routine and intervention stack Johnson presents as Blueprint.', why: 'Useful as the master reference for claims, source trails, and protocol caution.' },
  { title: 'Biomarker-driven longevity protocols', confidence: 'medium', tags: ['longevity', 'biomarkers'], summary: 'The feedback-loop idea that biomarkers guide protocol changes, with caveats about outcomes.', why: 'Prevents biomarker movement from being mistaken for proven clinical benefit.' },
  { title: 'Algorithmic Health', confidence: 'medium', tags: ['health', 'experiments'], summary: 'Delegating health decisions to measurement, rules, and repeatable systems.', why: 'Explains the operating model behind protocol changes and dashboards.' },
  { title: "Don't Die", confidence: 'medium', tags: ['longevity'], summary: 'Johnson’s anti-death ideology and movement framing.', why: 'Separates philosophical positioning from specific health interventions.' },
  { title: 'Immortality by 2039', confidence: 'low', tags: ['longevity', 'experiments'], summary: 'An aspirational longevity claim that should stay clearly low-confidence.', why: 'Important worldview context, not a medical forecast.' },
  { title: 'Project Blueprint', confidence: 'medium', tags: ['nutrition', 'health'], summary: 'The company/protocol ecosystem around Johnson’s routine, products, and measurement claims.', why: 'Helps readers distinguish protocol, marketplace, and evidence layers.' },
  { title: 'Female-specific Blueprint / Kate Tolo protocol', confidence: 'medium', tags: ['health', 'protocols'], summary: 'A cycle-aware baseline project with source-aware sensitive-health caveats.', why: 'Current signal that requires careful N=1/N=2 framing.' },
  { title: 'Protocol reversibility', confidence: 'medium', tags: ['experiments', 'biomarkers'], summary: 'The principle that a protocol can reverse or pause interventions when measurements or risk assessments change.', why: 'Supports changelog thinking: updates are not failures if the loop is explicit.' },
];

export const curatedActivity = [
  { date: '2026-05-24', x_post: 4, third_party: 0, wiki_update: 1, site_update: 0 },
  { date: '2026-05-23', x_post: 2, third_party: 2, wiki_update: 1, site_update: 1 },
  { date: '2026-05-22', x_post: 3, third_party: 1, wiki_update: 3, site_update: 4 },
  { date: '2026-05-19', x_post: 1, third_party: 2, wiki_update: 1, site_update: 0 },
  { date: '2026-05-15', x_post: 1, third_party: 0, wiki_update: 1, site_update: 0 },
  { date: '2026-05-12', x_post: 1, third_party: 0, wiki_update: 1, site_update: 0 },
  { date: '2026-05-07', x_post: 1, third_party: 1, wiki_update: 1, site_update: 0 },
];

export const protocolUpdates = [
  { date: '2026.05.24', kind: '+ ADD', change: 'Sleep front-loading tracked as a source-backed example with advice caveat.' },
  { date: '2026.05.23', kind: '+ ADD', change: 'Kate Tolo baseline added to health watch queue with sensitive-health caution.' },
  { date: '2026.05.22', kind: '~ UPD', change: 'Retatrutide claim routed to nutrition concepts as clinician-guidance required.' },
  { date: '2026.05.15', kind: '+ ADD', change: 'Blueprint partner-product signal added as marketplace context only.' },
  { date: '2026.05.07', kind: '+ ADD', change: 'Microplastics testing signal added with N=1 causality warning.' },
];

export const siteChanges = [
  { date: '2026.05.27', version: 'v0.4', change: 'Fresh BJ.WATCH terminal shell built from reference HTML visual system.' },
  { date: '2026.05.27', version: 'v0.3', change: 'Protocols split into Habits, Long-term objectives, and Forbidden panels.' },
  { date: '2026.05.27', version: 'v0.2', change: 'Overview, metrics, concepts, and two-stream changelog wired to source-aware seeds.' },
  { date: '2026.05.27', version: 'v0.1', change: 'Initialized clean Vite project with structure checks and local build workflow.' },
];

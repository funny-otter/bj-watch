export const protocolCategories = [
  {
    category: 'health',
    title: 'Health protocol',
    lede: 'A source-aware view of Blueprint health routines: measurement, sleep consistency, oral care, exercise, nutrition basics, and caution around experimental or N=1 claims.',
    confidence: 'mixed',
    sourcePaths: ['concepts/blueprint-protocol.md', 'entities/project-blueprint.md', 'concepts/algorithmic-health.md'],
    sections: {
      habits: [
        'Measure first, then adjust: bloodwork every 3–6 months plus wearable, oral, skin, organ, glucose, body-composition, and annual screening signals where appropriate.',
        'Make sleep the root health behavior: lower resting heart rate before bed, protect a consistent bedtime, and treat sleep as the foundation for exercise, nutrition, and self-control.',
        'Train the body every day in some form: strength, cardio, flexibility, balance, post-meal movement, and desk-break movement instead of occasional heroic workouts.',
        'Use food systems, not mood: make every calorie “fight for its life,” rely on repeatable meals, and avoid letting hunger/stress make eating decisions.',
        'Maintain the daily hygiene layer: oral care morning/night, skin protection, clean water, morning light, and relationship/community inputs.',
      ],
      longterm: [
        'Feedback loop: keep Blueprint as a repeatable measure → intervene → retest system whose rules change when biomarkers, symptoms, or evidence change.',
        'Cardiometabolic resilience: lower bedtime resting heart rate and stabilize sleep, glucose, blood pressure, and body composition over repeated measurements.',
        'Organ-age posture: track skin, oral, vascular, metabolic, muscle, bone, sleep, and fertility/sexual-function claims as measured targets, not vibes.',
        'Durable function: preserve muscle, bone density, mobility, balance, and injury resistance so the protocol compounds instead of causing setbacks.',
        'Medical-caution integrity: keep the public page source-aware and separate personal routine documentation from personal treatment advice.',
      ],
      donts: [
        'Do not present Johnson’s N=1 biomarker movement as proof of clinical outcomes for readers.',
        'Do not mix experimental drugs, hormones, procedures, or high-dose supplements into the same confidence tier as sleep, exercise, and food quality.',
        'Do not ignore bedtime RHR drivers: alcohol, anxiety/rumination, late caffeine, intense evening exercise, large late meals, nicotine, dehydration, heat, or stimulant medications.',
        'Do not let “Evening Bryan” style self-persuasion make food, screen, alcohol, or bedtime decisions; firm rules beat negotiation.',
        'Do not turn the protocol into universal medical advice, especially around pregnancy, female-cycle adjustments, prescriptions, or advanced therapies.',
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
        'Protect the foundation daily: sleep quality, exercise, nutrition, emotional resilience, and social connection before exotic therapies.',
        'Exercise toward the published baseline: about 6 hours weekly across strength, cardio, flexibility, balance, Zone 2, and vigorous work when appropriate.',
        'Track biological-age, speed-of-aging, blood, imaging, sleep, fitness, oral, skin, and body-composition numbers as claims with source trails and critique links nearby.',
        'Use clinician-guided prevention and routine measurement: bloodwork, glucose monitoring where relevant, annual checks, dentist, eye doctor, and cancer/skin screening.',
        'Keep family, friendship, and community in the protocol because Johnson explicitly lists “love and be loved” as a longevity behavior.',
      ],
      longterm: [
        'Muscle/fat/bone targets: preserve high lean mass, optimal body fat, and bone density rather than chasing scale weight alone.',
        'Cardiovascular/vascular targets: sustain low resting heart rate, healthy blood pressure, and vascular-function claims in the late-teen/early-20s framing only as reported metrics.',
        'Metabolic targets: keep glucose and blood-sugar-control claims in measurement context, with retesting instead of diet ideology.',
        'Aging-speed targets: display epigenetic speed-of-aging, telomere, and “organ age” claims as tracked biomarkers, not guaranteed lifespan outcomes.',
        'Evidence-tier target: separate durable healthspan practices from frontier enhancement, drug-stack, gene-therapy, and immortality narratives.',
      ],
      donts: [
        'Do not render “immortality by 2039” as a realistic forecast or medical endpoint.',
        'Do not collapse Johnson’s ideology, Blueprint marketing, and independent evidence into one confidence level.',
        'Do not imply biomarker optimization automatically proves longer life, fewer events, or lower all-cause mortality for a reader.',
        'Do not glamorize advanced therapies—gene therapy, plasma/stem-cell procedures, HBOT, prescription stacks, or enhancement competition framing—without caveats.',
        'Do not let addiction-pattern inputs dominate: fast food, junk food, smoking, nicotine, vaping, excessive alcohol, social media, or anything addictive.',
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
        'Make every calorie “fight for its life”: choose nutrient-dense foods and use repeatable meal systems rather than mood-driven eating.',
        'Keep the current published macro frame source-bound: 2,250 calories, about 130 g protein, 206 g carbs, and 101 g fat for Johnson’s routine, not a universal prescription.',
        'Finish the final meal/snack at least four hours before bed so digestion and resting heart rate do not wreck sleep.',
        'Use biomarkers to decide whether foods serve the body rather than identifying with camps such as plant-based, carnivore, keto, or paleo.',
        'For female-cycle guidance, keep phase-aware nutrition in context: higher-carb follicular support, luteal protein/healthy-fat emphasis, hydration/electrolytes, and clinician-aware supplementation.',
      ],
      longterm: [
        'Calorie target: keep moderate restriction and exact calorie numbers tied to Johnson’s sourced routine, with no reader-specific prescription.',
        'Protein target: preserve muscle with adequate protein, including female-cycle and menopause notes where the source gives separate targets.',
        'Metabolic target: support glucose stability and bedtime RHR by avoiding large late meals and retesting relevant biomarkers.',
        'Nutrient-density target: prioritize longevity-food patterns, fiber, healthy fats, micronutrient adequacy, and tested deficiencies over diet identity.',
        'Product-claim target: pair Blueprint foods, supplements, microplastics testing, and metabolic-drug commentary with source paths and independent-evidence caveats.',
      ],
      donts: [
        'Do not publish Johnson’s calorie, macro, supplement-dose, or eating-window numbers as universal targets.',
        'Do not treat metabolic-drug analogies, microplastics product claims, or Blueprint marketing as clinician guidance.',
        'Do not eat close to bed; the protocol frames late meals as a major driver of higher resting heart rate and worse sleep.',
        'Do not rely on nutrition tribal labels; the source says to follow evidence, data, and biomarker response.',
        'Do not let fast food, junk food, fried/highly processed foods, added sugar, excessive alcohol, or stress-eating become default inputs.',
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
        'Reframe identity: act like a professional sleeper and put sleep as the first appointment the rest of the day works around.',
        'Eat the final meal at least four hours before bed to lower bedtime resting heart rate and protect sleep quality.',
        'Turn screens off 60 minutes before bed and use a wind-down routine: reading, walk, journaling, breathwork, meditation, bath, family, or a friend call.',
        'Keep a consistent bedtime and regulate evening light with red/amber light, blue-light reduction, and a quiet, dark, cool bedroom around 65–70°F.',
        'Get morning light within 15–30 minutes of waking and gather data with a journal, wearable, or tracker to tune the routine.',
      ],
      longterm: [
        'RHR target: lower resting heart rate before bed because Johnson frames it as the single highest-leverage sleep-health behavior.',
        'Consistency target: preserve a stable sleep/wake schedule rather than using occasional recovery nights as the strategy.',
        'Environment target: keep the room quiet, dark, cool, and low-stimulation so the body can wind down predictably.',
        'Measurement target: track sleep habits, patterns, and wearable claims as feedback, not as context-free universal score targets.',
        'Recovery-system target: treat sleep as the foundation that makes exercise, nutrition, emotional resilience, and self-control easier.',
      ],
      donts: [
        'Do not publish unsourced sleep score, REM, HRV, wake-event, or “perfect sleep” targets without source verification.',
        'Do not imply one nap or one night can fully repay circadian disruption, sleep debt, or long-haul travel effects.',
        'Do not eat late, drink alcohol before bed, or take stimulants such as caffeine within the 8–10 hour pre-sleep window.',
        'Do not keep screens, work, texting, partying, rumination, or emotionally charged fights in the final hour before sleep; Johnson says no fights after 5 pm.',
        'Do not normalize chronic short sleep; the source frames sleep deprivation as cognitive, immune, metabolic, and willpower damage.',
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
  { date: '2026.05.28', version: 'v0.5', change: 'Expanded every protocol to 5 habits, 5 long-term objectives, and 5 forbidden items from Bryan Johnson protocol research.' },
  { date: '2026.05.27', version: 'v0.4', change: 'Fresh BJ.WATCH terminal shell built from reference HTML visual system.' },
  { date: '2026.05.27', version: 'v0.3', change: 'Protocols split into Habits, Long-term objectives, and Forbidden panels.' },
  { date: '2026.05.27', version: 'v0.2', change: 'Overview, metrics, concepts, and two-stream changelog wired to source-aware seeds.' },
  { date: '2026.05.27', version: 'v0.1', change: 'Initialized clean Vite project with structure checks and local build workflow.' },
];

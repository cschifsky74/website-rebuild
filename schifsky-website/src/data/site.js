// =============================================================================
// SINGLE SOURCE OF TRUTH FOR BUSINESS INFO (NAP = Name, Address, Phone)
// Everything on the site reads from this file. Change a value here once and it
// updates everywhere — header, footer, schema, contact page. This is how we
// keep NAP perfectly consistent for local SEO.
// =============================================================================

export const site = {
  name: 'Schifsky Companies',
  shortName: 'Schifsky Co.',
  legalName: 'Schifsky Companies',
  tagline: 'Landscape Design & Build in the Twin Cities',
  domain: 'https://www.schifskycompanies.com',

  // --- PHONE (two numbers, used in two distinct places) ----------------------
  // OFFICIAL business number = NAP. Used in the footer, LocalBusiness schema,
  // and anywhere Google reads the "official" contact. Matches Google Business
  // Profile — keep identical everywhere.
  phone: '651-439-0603',
  phoneHref: 'tel:+16514390603',
  // CALLRAIL tracking number. Used ONLY on visible "Call" / click-to-call
  // buttons and CTAs (header, hero, CTAs, mobile bar) for call tracking.
  callPhone: '651-381-4233',
  callHref: 'tel:+16513814233',

  email: 'support@schifskycompanies.com',

  // CONTACT FORM: paste your Formspree endpoint here at deploy (it will deliver
  // submissions to the email above). Until set, the form validates and shows a
  // thank-you message. Example: 'https://formspree.io/f/xxxxxxxx'
  formEndpoint: '',

  // --- ADDRESS (NAP — confirmed by Carson) -----------------------------------
  address: {
    street: '3520 Lavern Ave N',
    city: 'Lake Elmo',
    state: 'MN',
    zip: '55042',
    country: 'US',
  },

  // [CONFIRM] Business hours were not in the export. Placeholder below — give
  // me your real hours and I'll update the schema + footer.
  hours: [
    { days: 'Mon–Fri', open: '07:00', close: '17:00' },
  ],

  // Approximate coordinates for Lake Elmo, MN (refine later if needed).
  geo: { lat: 44.9958, lng: -92.8890 },

  serviceArea: [
    'Woodbury', 'Lake Elmo', 'Wayzata', 'Edina', 'Stillwater',
    'Chaska', 'Shakopee', 'Hugo', 'Mahtomedi', 'White Bear Lake',
  ],

  social: {
    youtube: 'https://www.youtube.com/@schifskycompanies1425',
    facebook: 'https://www.facebook.com/SCHIFSKYS',
    instagram: 'https://www.instagram.com/schifsky_companies',
  },

  foundedYear: 1989,
  yearsInBusiness: 37,
};

// --- SERVICES -----------------------------------------------------------------
// `href` points DIRECTLY to each service page's FINAL URL (no redirect hops).
// URLs that already rank are kept exactly (e.g. /custom-landscape-design/).
// `built:false` = detail page not built yet (next batch) — link target pending.
export const services = [
  { title: 'Landscape Design', href: '/custom-landscape-design/', built: false,
    blurb: 'See your project before we break ground with detailed 3D landscape design.' },
  { title: 'Paver Patios & Hardscape', href: '/paver-patios/', built: false,
    blurb: 'Durable paver and natural-stone patios, walkways and steps built for Minnesota winters.' },
  { title: 'Boulder Retaining Walls', href: '/boulder-retaining-walls-lake-elmo/', built: false,
    blurb: 'Structural and decorative boulder walls that hold up and stand out.' },
  { title: 'Outdoor Living & Kitchens', href: '/outdoor-living/', built: false,
    blurb: 'Outdoor kitchens, fire features and living spaces made for gathering.' },
  { title: 'Pools', href: '/fiberglass-pools/', built: false,
    blurb: 'Custom and fiberglass pool installs paired with full landscape design.' },
  { title: 'Aluminum Pergolas', href: '/aluminum-pergola-builder-minnesota/', built: false,
    blurb: 'Low-maintenance aluminum pergolas that add shade and style.' },
  { title: 'Landscape Drainage', href: '/landscape-drainage-in-lake-elmo/', built: false,
    blurb: 'Solve standing water and protect your home with proper drainage.' },
  { title: 'Snow Removal & De-Icing', href: '/snow-and-ice-removal-services/', built: false,
    blurb: 'Reliable residential and commercial snow removal all winter long.' },
];

// --- PROJECTS -----------------------------------------------------------------
// Real project names from the WordPress export. `img` is a sample placeholder
// until Carson supplies real photos. The homepage shows the first 6; the
// portfolio page shows them all — both read from THIS list so they always match.
// `slug` = the project's URL at /projects/<slug>/ (matches the old site).
export const projects = [
  { name: 'Prestwick Pool & Landscape', where: 'Woodbury, MN', img: '/img/placeholder-3.jpg', slug: 'prestwick-pool-landscape', blurb: 'A full backyard build pairing a pool with paver patio and surrounding landscape design.' },
  { name: 'Mahtomedi Pool & Landscape', where: 'Mahtomedi, MN', img: '/img/placeholder-4.jpg', slug: 'mahtomedi-pool-landscape', blurb: 'Pool installation with integrated landscape design, planting, and hardscape.' },
  { name: 'Woodbury Modern', where: 'Woodbury, MN', img: '/img/placeholder-5.jpg', slug: 'woodbury-modern', blurb: 'A clean, modern outdoor living space designed to match the home’s architecture.' },
  { name: 'Dellwood Retreat', where: 'Dellwood, MN', img: '/img/placeholder-6.jpg', slug: 'dellwood-retreat', blurb: 'A private backyard retreat with patio, plantings, and outdoor living areas.' },
  { name: 'Shakopee Pool', where: 'Shakopee, MN', img: '/img/placeholder-7.jpg', slug: 'shakopee-pool-landscape', blurb: 'Pool and patio project with surrounding landscape and grading.' },
  { name: 'Troy Burne Backyard', where: 'Hudson, WI', img: '/img/placeholder-8.jpg', slug: 'troy-burne-backyard', blurb: 'A backyard transformation built for relaxing and entertaining.' },
  { name: 'Hugo Backyard Retreat', where: 'Hugo, MN', img: '/img/placeholder-9.jpg', slug: 'hugo-backyard-retreat', blurb: 'A complete backyard retreat with patio, fire feature, and landscape.' },
  { name: 'Lake Elmo Landscape', where: 'Lake Elmo, MN', img: '/img/placeholder-10.jpg', slug: 'lake-elmo-landscape', blurb: 'Full landscape design and build close to home in Lake Elmo.' },
  { name: 'Life On The Prairie', where: 'Scandia, MN', img: '/img/placeholder-3.jpg', slug: 'scandia-prairie-escape', blurb: 'A prairie-style escape blending natural plantings with usable outdoor space.' },
  { name: 'Where Lawn Meets Prairie', where: 'Twin Cities, MN', img: '/img/placeholder-4.jpg', slug: 'where-lawn-meets-prairie', blurb: 'A landscape design where manicured lawn transitions into native prairie.' },
];

// --- REAL TESTIMONIALS (pulled from the old site's WordPress export) ---------
export const testimonials = [
  { name: 'Thomas J. Simonet', location: '',
    text: 'I had Schifsky complete a patio for me over the summer of 2023. I was impressed with the crew. They worked together as a well-rehearsed team. One installed paver didn’t meet their expectation, so they pulled back other pavers to reset the one that just didn’t look right. That is teamwork.' },
  { name: 'Brenda Hafiz', location: '',
    text: 'I would recommend Schifsky Co for all landscaping/patio etc. We met with Carson in the spring, came up with a plan, made our selections, and everything was perfect! I have built 3 homes with pools — this company is by far the best I have worked with. No delays, and everything was clean when they were done. Highly recommend!' },
  { name: 'Tracy Tomb', location: 'Stillwater, MN',
    text: 'We hired Schifsky Co to build a retaining wall and add a patio in the backyard, plus stone work around the house. From our initial meetings to completion we were impressed with the professionalism and workmanship of everyone involved. The crews worked very hard, took great care not to disturb neighboring yards, and cleaned up at the end of every day.' },
  { name: 'Ryan Hartzog', location: 'Chaska, MN',
    text: 'Schifsky Companies recently completed a landscaping project in conjunction with a pool install. They did a great job with the design, plant choice, and completion of the work in a timely manner. I would highly recommend Carson and Brendan at Schifsky for your next project!' },
  { name: 'Sarah Walker', location: '',
    text: 'This company does amazing work! We are so happy with how our patio turned out, and we had nothing but exceptional customer service through the design and build of our project. 10/10 recommended!' },
  { name: 'Becky Cummins', location: '',
    text: 'Carson Schifsky has been doing our snow removal this winter. We could not be more pleased with the quality of his work. He shows up quickly after every snowfall and expertly deals with the snow. This winter, we are especially grateful!' },
];

// Aggregate rating for Review schema. [CONFIRM] These are placeholder numbers
// for the rich-result stars — replace with your real Google review count/avg.
export const aggregateRating = {
  ratingValue: '5.0',
  reviewCount: testimonials.length, // placeholder count = testimonials shown
};

const SITE_URL = 'https://www.thrivechiropractic.com.my'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${SITE_URL}#chiropractor`,
  name: 'Thrive Gonstead Chiropractic',
  medicalSpecialty: 'Chiropractic',
  description:
    'Specialist Gonstead chiropractic clinic in Bandar Rimbayu, Selangor, offering precise spinal adjustments for back pain, neck pain, sciatica, headaches, and posture correction.',
  url: SITE_URL,
  telephone: '+60178688789',
  email: 'thrivegonsteadchiropractic@gmail.com',
  image: [
    `${SITE_URL}/images/showcase/main_1.jpg`,
    `${SITE_URL}/images/showcase/main_2.jpg`,
    `${SITE_URL}/images/showcase/main_3.jpg`,
  ],
  logo: `${SITE_URL}/images/logo/thrive-logo-words.png`,
  priceRange: 'RM100 - RM200',
  currenciesAccepted: 'MYR',
  paymentAccepted: 'Cash, QR Pay, Bank Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C-G-06, Se Ruang Square, 8/3, Persiaran Eco Sanctuary, Bandar Rimbayu',
    addressLocality: 'Telok Panglima Garang',
    addressRegion: 'Selangor',
    postalCode: '42500',
    addressCountry: 'MY',
  },
  areaServed: [
    { '@type': 'City', name: 'Bandar Rimbayu' },
    { '@type': 'City', name: 'Kota Kemuning' },
    { '@type': 'City', name: 'Puchong' },
    { '@type': 'City', name: 'Shah Alam' },
    { '@type': 'AdministrativeArea', name: 'Klang Valley' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
      opens: '10:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/thrivechiropractic.my',
    'https://maps.app.goo.gl/Kuy31p4jtpyjbtKe7',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Chiropractic Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Initial Consultation' },
        price: '100',
        priceCurrency: 'MYR',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'First Treatment (X-Ray & First Adjustment)' },
        price: '200',
        priceCurrency: 'MYR',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Standard Follow-Up' },
        price: '160',
        priceCurrency: 'MYR',
      },
    ],
  },
}

export default function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

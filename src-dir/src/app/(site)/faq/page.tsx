import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import SectionHeading from '@/components/shared/SectionHeading'
import BookButton from '@/components/shared/BookButton'

interface FaqItem {
  q: string
  a: string
}

interface FaqCategory {
  id: string
  title: string
  items: FaqItem[]
}

const categories: FaqCategory[] = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        q: 'What is chiropractic care?',
        a: 'Chiropractic is a regulated, drug-free healthcare profession that focuses on the diagnosis, treatment, and prevention of mechanical disorders of the musculoskeletal system — especially the spine. Chiropractors use hands-on spinal adjustments to restore proper alignment and support the body\'s natural ability to heal.',
      },
      {
        q: 'Is chiropractic care safe?',
        a: 'Yes. Chiropractic is one of the safest forms of healthcare for musculoskeletal conditions. Serious adverse events are extremely rare. Our practitioners are fully trained and registered, and we conduct a thorough assessment before any treatment to ensure it is appropriate and safe for you.',
      },
      {
        q: 'What conditions can chiropractic help with?',
        a: 'Chiropractic care is effective for a wide range of conditions including back pain, neck pain, headaches, migraines, sciatica, disc bulge or herniation, sports injuries, postural problems, and more. We also provide care for pregnant women and children.',
      },
      {
        q: 'How long does a chiropractic appointment take?',
        a: 'Your initial consultation takes approximately 60 minutes — this includes a full health history, spinal assessment, X-ray analysis (where indicated), and your first adjustment. Follow-up sessions are approximately 30 minutes.',
      },
      {
        q: 'Do I need a referral to see a chiropractor?',
        a: 'No referral is needed. You can book directly with us via our online booking system or WhatsApp. We welcome walk-ins when availability allows, but we recommend booking in advance to secure your preferred time.',
      },
    ],
  },
  {
    id: 'gonstead',
    title: 'Gonstead Technique',
    items: [
      {
        q: 'What is the Gonstead technique?',
        a: 'The Gonstead System is widely regarded as the most specific and thorough chiropractic technique available. Developed by Dr. Clarence Gonstead, it uses five criteria — Visualisation, Instrumentation, Static Palpation, Motion Palpation, and X-ray Analysis — to precisely identify spinal misalignments and correct only those that need adjustment.',
      },
      {
        q: 'How is Gonstead different from general chiropractic?',
        a: 'General chiropractic often involves adjusting multiple segments of the spine in a single visit. The Gonstead approach only adjusts the specific vertebrae that are causing a problem, identified through objective analysis. This makes treatment more targeted, more effective, and avoids unnecessary manipulation of healthy joints.',
      },
      {
        q: 'Does the Gonstead adjustment hurt?',
        a: 'Most patients experience immediate relief or a sense of release after a Gonstead adjustment. Some may notice mild soreness in the treated area for 24–48 hours, similar to the feeling after exercise. The technique is designed to be precise and controlled, minimising discomfort while maximising effectiveness.',
      },
    ],
  },
  {
    id: 'xray',
    title: 'X-Ray & Diagnosis',
    items: [
      {
        q: 'Why do you take X-rays?',
        a: 'X-rays are a cornerstone of the Gonstead System. They allow us to see the exact position, angle, and structural integrity of each vertebra — information that cannot be determined through touch alone. This enables us to make precise, confident adjustments and to track structural improvements over time.',
      },
      {
        q: 'Are the X-rays safe?',
        a: 'Yes. We use modern digital X-ray technology that uses a fraction of the radiation of traditional film X-rays. The dose is well within internationally accepted safety guidelines. X-rays are only taken when clinically indicated and are never performed unnecessarily — for example, we do not typically X-ray pregnant patients.',
      },
      {
        q: 'Will I receive X-rays at every visit?',
        a: 'No. X-rays are typically taken at your initial consultation to establish a baseline. Repeat X-rays may be taken at key review points to objectively measure your structural progress, but they are not a routine part of every visit.',
      },
    ],
  },
  {
    id: 'pricing-booking',
    title: 'Pricing & Booking',
    items: [
      {
        q: 'How much does a consultation cost?',
        a: 'Our initial consultation is RM200, which includes a full spinal assessment, X-ray analysis (where indicated), and your first Gonstead adjustment. Follow-up sessions are RM160 per visit.',
      },
      {
        q: 'Do you offer packages or membership plans?',
        a: 'We are happy to discuss ongoing care plans tailored to your individual needs. Please speak to our team at your initial consultation to learn about options that may be available to you.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept cash, credit and debit cards, and online bank transfer. Payment is due at the time of service. For corporate or insurance billing enquiries, please contact us via WhatsApp.',
      },
      {
        q: 'How do I book an appointment?',
        a: 'You can book directly through our online booking system by clicking the "Book an Appointment" button on this website. Alternatively, you can reach us via WhatsApp and our team will assist you with scheduling.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'We request at least 24 hours notice for cancellations or rescheduling. This allows us to offer your appointment time to another patient in need. Late cancellations or no-shows may be subject to a cancellation fee.',
      },
      {
        q: 'Can I bring someone with me to my appointment?',
        a: 'Absolutely. You are welcome to bring a support person, family member, or caregiver. For paediatric patients, a parent or guardian must be present throughout the consultation and treatment.',
      },
    ],
  },
  {
    id: 'conditions',
    title: 'Conditions',
    items: [
      {
        q: 'Can chiropractic help with disc problems?',
        a: 'Yes. The Gonstead technique is particularly effective for disc-related issues including disc bulge and herniation. By restoring proper spinal mechanics and reducing nerve compression, chiropractic care can significantly relieve symptoms and support disc recovery without surgery.',
      },
      {
        q: 'Is chiropractic care safe during pregnancy?',
        a: 'Yes, when performed by a trained practitioner. We use specialised techniques and positioning that are completely safe for pregnant patients at all stages. Chiropractic care during pregnancy can help manage pelvic pain, back discomfort, and prepare the pelvis for birth.',
      },
      {
        q: 'Can children see a chiropractor?',
        a: 'Yes. Paediatric chiropractic uses very gentle, modified techniques appropriate for the child\'s age and size. Many parents bring their children in for issues such as colic, feeding difficulties, developmental concerns, and postural problems. The adjustments used are extremely gentle — no more pressure than you would use to test the ripeness of a tomato.',
      },
      {
        q: 'I\'ve had surgery on my spine — can I still have chiropractic care?',
        a: 'In many cases, yes. However, this depends entirely on the type and location of your surgery, how long ago it was performed, and your current spinal status. We will review your surgical history and any relevant imaging thoroughly before recommending a course of care, and we will always err on the side of caution.',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Help Centre"
            heading="Frequently Asked Questions"
            subheading="Everything you need to know about chiropractic care, the Gonstead technique, and what to expect at Thrive Chiropractic."
          />
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category.id} id={category.id}>
                <h2
                  className="text-2xl font-bold text-charcoal mb-4"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {category.title}
                </h2>
                <div className="w-10 h-px bg-gold mb-6" />
                <Accordion className="space-y-2" defaultValue={[0]}>
                  {category.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={i}
                      className="border border-border-warm rounded-xl px-5 bg-white data-open:border-sage"
                    >
                      <AccordionTrigger className="text-left text-charcoal font-medium text-lg hover:text-sage hover:no-underline py-4">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-green text-base leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-sage/10 rounded-2xl p-10">
            <h3
              className="text-2xl font-bold text-charcoal mb-3"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Still have questions?
            </h3>
            <p className="text-muted-green mb-6">
              Chat with us on WhatsApp or book an appointment and we&apos;ll answer everything in person.
            </p>
            <BookButton size="md" />
          </div>
        </div>
      </section>
    </>
  )
}

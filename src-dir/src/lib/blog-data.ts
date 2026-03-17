export interface BlogImage {
  src: string
  alt: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  tags: string[]
  coverImage: string
  images: BlogImage[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-gonstead-chiropractic',
    title: 'What Is Gonstead Chiropractic and Why Does It Matter?',
    excerpt:
      'The Gonstead system is considered the gold standard of chiropractic care. Learn what makes it different and why precision matters for your spine.',
    author: 'Dr. Lucas',
    date: '2026-03-10',
    tags: ['Gonstead', 'Chiropractic', 'Education'],
    coverImage: '/images/blog/gonstead-cover.jpg',
    images: [
      { src: '/images/blog/gonstead-xray.jpg', alt: 'X-ray analysis of the spine used in Gonstead chiropractic' },
      { src: '/images/blog/gonstead-adjustment.jpg', alt: 'Chiropractor performing a Gonstead spinal adjustment' },
      { src: '/images/blog/gonstead-spine.jpg', alt: 'Massage therapy supporting spinal health and recovery' },
    ],
    content: `The Gonstead system was developed by Dr. Clarence Gonstead over decades of clinical practice, beginning in the 1920s. Unlike general chiropractic approaches that may adjust multiple areas of the spine in a single session, the Gonstead method focuses on identifying the specific vertebral segment causing dysfunction — and correcting only that segment.

## The Five Criteria

Gonstead chiropractors use five distinct criteria to analyse the spine before making any adjustment:

**1. Visualisation** — Observing posture, gait, and body symmetry to identify areas of imbalance.

**2. Instrumentation** — Using a Nervoscope, a heat-sensing instrument that detects uneven temperature distribution along the spine, indicating areas of nerve irritation.

**3. Static Palpation** — Feeling the spine while the patient is still, checking for swelling, tenderness, and muscle tightness.

**4. Motion Palpation** — Moving each spinal segment to assess its range of motion and identify fixations or restrictions.

**5. X-Ray Analysis** — Detailed radiographic examination to visualise spinal alignment, disc health, and structural integrity.

![image-0]

## Why Precision Matters

When a chiropractor adjusts a segment that does not need correction, it can create instability. The Gonstead approach avoids this by ensuring every adjustment is supported by multiple lines of evidence. This precision leads to faster recovery times, fewer visits, and more lasting results.

![image-1]

## Who Benefits from Gonstead Care?

The Gonstead system is suitable for patients of all ages — from newborns with colic or torticollis to elderly patients managing degenerative conditions. It is particularly effective for disc injuries, sciatica, chronic low back pain, and cervical dysfunction.

![image-2]

If you have been to a chiropractor before but did not experience lasting results, the Gonstead approach may offer the specificity your spine needs.`,
  },
  {
    slug: 'desk-posture-and-your-spine',
    title: '5 Ways Your Desk Job Is Damaging Your Spine (And How to Fix It)',
    excerpt:
      'Spending 8+ hours at a desk is one of the leading causes of spinal dysfunction. Here are five common problems and practical solutions.',
    author: 'Dr. Ruth',
    date: '2026-03-03',
    tags: ['Posture', 'Workplace Health', 'Prevention'],
    coverImage: '/images/blog/desk-cover.jpg',
    images: [
      { src: '/images/blog/desk-posture.jpg', alt: 'Person demonstrating proper desk posture alignment' },
      { src: '/images/blog/desk-stretch.jpg', alt: 'Woman stretching at her desk to relieve spinal tension' },
      { src: '/images/blog/desk-ergonomic.jpg', alt: 'Ergonomic workspace setup for spinal health' },
    ],
    content: `Modern desk work is one of the greatest challenges to spinal health. Prolonged sitting, poor screen positioning, and repetitive strain create patterns of dysfunction that compound over time. Here are the five most common problems we see — and what you can do about them.

## 1. Forward Head Posture

For every inch your head moves forward from its neutral position, the effective weight on your cervical spine increases by approximately 4.5 kg. Over time, this leads to muscle fatigue, joint degeneration, and chronic neck pain.

**Fix:** Position your monitor so the top of the screen is at eye level. Keep your ears aligned over your shoulders.

## 2. Rounded Shoulders

Typing and mouse use encourage internal rotation of the shoulders, shortening the pectoral muscles and weakening the upper back.

**Fix:** Set a timer to do 30 seconds of doorway stretches every hour. Strengthen your mid-back with band pull-aparts or rows.

![image-0]

## 3. Lumbar Disc Compression

Sitting increases intradiscal pressure by up to 40% compared to standing. Without lumbar support, the lower back rounds, placing asymmetric load on the intervertebral discs.

**Fix:** Use a lumbar support cushion or a rolled towel behind your lower back. Stand up and walk for 2 minutes every 30 minutes.

## 4. Hip Flexor Tightness

Prolonged hip flexion shortens the iliopsoas muscle, which can pull the lumbar spine into excessive lordosis and contribute to lower back pain.

**Fix:** Perform a kneeling hip flexor stretch for 60 seconds on each side, twice daily.

![image-1]

## 5. Thoracic Kyphosis

The mid-back gradually rounds into a C-shape, reducing rib expansion and contributing to shallow breathing, fatigue, and upper back stiffness.

**Fix:** Lie over a foam roller placed horizontally at mid-back level for 2 minutes daily to encourage thoracic extension.

![image-2]

## When to Seek Professional Help

If you are already experiencing pain, numbness, or stiffness that does not resolve with stretching and posture correction, it is time for a professional assessment. A Gonstead chiropractor can identify exactly which spinal segments are affected and provide targeted corrections to restore function.`,
  },
  {
    slug: 'chiropractic-during-pregnancy',
    title: 'Is Chiropractic Care Safe During Pregnancy?',
    excerpt:
      'Pregnancy changes your body in profound ways. Learn how gentle chiropractic care can support you through every trimester.',
    author: 'Dr. Ruth',
    date: '2026-02-20',
    tags: ['Pregnancy', 'Chiropractic', 'Wellness'],
    coverImage: '/images/blog/pregnancy-cover.jpg',
    images: [
      { src: '/images/blog/pregnancy-belly.jpg', alt: 'Pregnant woman cradling her belly during prenatal care' },
      { src: '/images/blog/pregnancy-yoga.jpg', alt: 'Prenatal yoga and gentle exercise supporting pregnancy health' },
      { src: '/images/blog/pregnancy-care.jpg', alt: 'Mother and baby after a healthy pregnancy supported by chiropractic care' },
    ],
    content: `One of the most common questions we receive is whether chiropractic care is safe during pregnancy. The short answer: yes, when performed by a trained practitioner using appropriate techniques, chiropractic care is both safe and beneficial throughout all stages of pregnancy.

## How Pregnancy Affects the Spine

During pregnancy, the body undergoes significant biomechanical changes:

- **Increased lumbar lordosis** as the growing belly shifts the centre of gravity forward
- **Pelvic ligament laxity** due to the hormone relaxin, which loosens joints in preparation for delivery
- **Postural compensation** as the body adapts to the additional weight
- **Thoracic kyphosis** as breast tissue increases

These changes can lead to lower back pain, sciatica, round ligament pain, and pubic symphysis dysfunction — conditions that affect up to 70% of pregnant women.

![image-0]

## How Gonstead Chiropractic Helps

The Gonstead technique is particularly well-suited for pregnancy care because of its precision and gentleness. We use:

- **Modified positioning** — side-lying and seated adjustments that avoid pressure on the abdomen
- **Low-force techniques** — gentle corrections that respect the increased ligament laxity
- **Pelvic balancing** — ensuring the pelvis is symmetrically aligned to provide optimal space for the baby

![image-1]

## Benefits of Prenatal Chiropractic Care

Research and clinical experience show that regular chiropractic care during pregnancy can:

1. Reduce lower back and pelvic pain
2. Decrease the likelihood of back labour
3. Support optimal foetal positioning
4. Shorten labour times
5. Reduce the need for pain medication during delivery

## When Should You Start?

You can begin chiropractic care at any point during pregnancy. Many women start in the second trimester when discomfort begins, but early care can help prevent problems before they develop. We recommend visits every 2–4 weeks during the first and second trimesters, increasing to weekly visits in the third trimester as the body prepares for birth.

![image-2]

## A Note from Dr. Ruth

"Supporting mothers through pregnancy is one of the most rewarding parts of my practice. There is something incredibly special about helping a woman feel comfortable and confident in her body during one of the most transformative experiences of her life."`,
  },
]

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

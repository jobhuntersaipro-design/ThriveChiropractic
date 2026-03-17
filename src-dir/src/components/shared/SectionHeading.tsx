import GoldDivider from './GoldDivider'

interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-12 ${alignClass}`}>
      {eyebrow && (
        <p className="uppercase text-gold text-sm font-semibold tracking-widest mb-3 font-sans">
          {eyebrow}
        </p>
      )}
      <h2
        className="text-4xl md:text-5xl font-bold leading-tight"
        style={{ fontFamily: 'var(--font-cormorant)' }}
      >
        {heading}
      </h2>
      {align === 'center' && <GoldDivider />}
      {subheading && (
        <p className="text-muted-green mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  )
}

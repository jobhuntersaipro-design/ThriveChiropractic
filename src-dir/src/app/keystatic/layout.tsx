import { KeystaticSortScript } from '@/components/keystatic/KeystaticSortScript'

export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <KeystaticSortScript />
    </>
  )
}

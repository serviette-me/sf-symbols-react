import { Layout } from '@/components/Layout'

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  )
}

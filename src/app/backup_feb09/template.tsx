export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {children}
    </main>
  )
}

import './globals.css'

export const metadata = {
  title: 'Mindline',
  description: 'Mindline Web App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
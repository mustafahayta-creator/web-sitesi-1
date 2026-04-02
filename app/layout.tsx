import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Çukurova Gayrimenkul - Gayrimenkul Danışmanlığı',
  description: 'Profesyonel gayrimenkul danışmanlığı hizmetleri',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}

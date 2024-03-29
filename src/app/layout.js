import './globals.css'
import Nav from './Nav'
import Text from './_UI-components/Text'
import { formatDate } from './utils'

export const metadata = {
  title: 'Andrew Pethoud | Software Developer and Walkability Advocate',
  description: "I'm a full-stack software developer passionate about making digital and physical spaces healthy and enjoyable for everyone.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-slate-900 flex flex-col items-center">
          <div className="flex-1 flex flex-col w-full xl:w-3/4">
            <Nav />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="m-4 w-11/12">
                {children}
              </div>
            </div>
            <div className="flex justify-center">
              <Text>&copy; {formatDate(undefined, "YYYY")} Andrew Pethoud</Text>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}

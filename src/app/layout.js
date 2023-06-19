import Nav from './Nav'
import { AppContainer, Background } from './globalStyles'
import { Work_Sans } from 'next/font/google'

const WorkSans = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Background>
        <AppContainer>
          <div className={WorkSans.className}>
            <Nav />
            <div style={{ display: "flex", justifyContent: "center" }}>
              {children}
            </div>
          </div>
        </AppContainer>
      </Background>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{height: "100vh", width:"100vw"}}>
        {/*头部banner*/}
        <div className={"h-14 w-full bg-white sticky top-0 backdrop-blur bg-opacity-75"}>

        </div>

        {/*body*/}
        <div className={"h-max w-full"}>
          {children}
        </div>
      </body>
    </html>
  )
}

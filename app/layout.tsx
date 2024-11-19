// ./layout.tsx (ROOT LAYOUT)

import 'app/global.css'
import NavBar from './components/navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar />    {/* persists across all pages */}
        {children}    {/* renders here */}
      </body>
    </html>
  );
}

//   children prop represents the content of each page, and it should be rendered inside the body of the layout.
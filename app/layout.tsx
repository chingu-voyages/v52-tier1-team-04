// app/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head />
        <body>{children}</body>
      </html>
    );
  }

//   children prop represents the content of each page, and it should be rendered inside the body of the layout.
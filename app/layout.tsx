import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <div className="container">{children}</div>

        {/* Example External JS File (Avoid Inline Scripts) */}
        <script src="/scripts/main.js" defer></script>
      </body>
    </html>
  );
}
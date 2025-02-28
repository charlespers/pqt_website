export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Background */}
        <FractalBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content Wrapper - Pushes Footer Down */}
        <main className="flex-grow flex flex-col items-center px-4">
          <div className="content-wrapper">{children}</div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

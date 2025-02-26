import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64'); // Generates a secure nonce

  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Security-Policy" 
              content={`default-src 'self'; script-src 'self' https://trustedsource.com 'nonce-${nonce}'; object-src 'none'; base-uri 'self';`} />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/script.js" nonce={nonce}></script> {/* External script with nonce */}
      </body>
    </Html>
  );
}

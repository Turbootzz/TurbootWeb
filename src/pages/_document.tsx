import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body className="dark:bg-mainbg_dark bg-mainbg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
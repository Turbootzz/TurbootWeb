import { AppProps } from 'next/app';
import '../styles/globals.css';
import { ThemeProvider } from '../utils/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css'
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
  <Component {...pageProps} />
  <Analytics />
  </>
  )
}

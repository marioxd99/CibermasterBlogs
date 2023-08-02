import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

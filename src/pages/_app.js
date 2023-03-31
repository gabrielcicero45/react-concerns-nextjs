import { Header } from "@/ui/components/Header";
import Head from "next/head";
import '@/styles/globals.scss'

export function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rooms</title>
      </Head>

      <Header />

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}



export default App;

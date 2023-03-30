import { Header } from "@/ui/components/Header";
import { ReservationsProvider } from "../application/providers/ReservationsProvider";
import { InventoryProvider } from "../application/providers/InventoryProvider";
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

const AppWithProviders = (props) => (
    <ReservationsProvider>
      <InventoryProvider>
        <App {...props} />
      </InventoryProvider>
    </ReservationsProvider>
);

export default AppWithProviders;

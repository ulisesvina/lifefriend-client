import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";

const App = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <div className="flex flex-col h-screen justify-between">
        <Head>
          <title>LifeFriend</title>
        </Head>
        <Header />
        <div className="mt-10 mb-auto">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
};

export default App;

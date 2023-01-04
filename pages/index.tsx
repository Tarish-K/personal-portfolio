import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tarish Portfolio</title>
      </Head>

      <Header />

      <section id="hero">
          <Hero />
      </section>


    </div>
  );
}

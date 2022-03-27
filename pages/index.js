import Head from "next/head";
import Header from "../components/Header";
import Homepage from "../pages/home";
import About from "./about";
import Skill from "./skill";

export default function Home() {
  return (
    <di>
      <Head>
        <title>NATCHANON - Homepage </title>
        <meta name="author" content="Natchanon Wanthong" />
        <meta name="author" content="Natchanon Wanthong" />
        <meta property="og:site_name" content="Natchanon's Homepage" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="dark:bg-[#181818] transition-all duration-100 w-screen bg-slate-200">
        <Header />
        <Homepage />
        <About />
        <Skill />
      </main>
    </di>
  );
}

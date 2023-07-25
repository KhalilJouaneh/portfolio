import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { FaMapPin } from "react-icons/fa";
// import CursorBalls from "../components/cursorBalls";

export default function Home() {
  return (
    <>
      <Head>
        <title>KhalilJouaneh</title>
        <meta
          name="description"
          content="Khalil Jouaneh's developer portfolio"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?Noto+Sans:wght@500&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="everything">
        <Navbar />
        <div className="main-container">
          <Image
            src="/degenApe.jpg"
            width={150}
            height={100}
            className="degen-ape"
          />

          <h1 className="name-heading">KhalilJouaneh</h1>

          <div className="intro-location-container">
            <div>
              <p className="intro">
                Hi, I'm a fresh Computer Science graduate with a passion for
                full-stack development, data engineering & optimizing UI/UX.{" "}
                <span>
                  Here is a bit of my background, professional experience, and
                  some projects I&apos;ve worked on, and answers to questions
                  you might have:{" "}
                </span>
              </p>

              <div className="location">
                <FaMapPin color="pink" size={25} className="ml-2" />
                <p className="location-text">
                  Location (2023) <br /> <span>Toronto, ON </span> / Metaverse
                </p>
              </div>
            </div>

            <div className="vertical-navbar">
              <Link href="/">Work</Link>
              <Link href="/">Projects</Link>
              <Link href="/">Resume</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Writing</Link>
            </div>
          </div>

          <div className="divider" />

          <div className="work-container">
            <h2 className="subheading"> Work </h2>
            <p className="work-intro">
              <span>Presently</span>, I'm spearheading a startup, backed by an
              accelerator, that aims to bridge the gap between traditional
              finance & decentralized infrastructure at{" "}
              <Link
                href="https://www.alphaline.wtf/"
                target="_blank"
                className="border-b-[1px] border-current pb-[-1px] opacity-[0.99]"
              >
                alphaline.wtf
              </Link>
              .<span> Previously</span>, I built a regenerative finance
              protocol, interned as a site reliability enginer, contributed to
              open source & was part of the blockhain design team at
              Queen&apos;s University.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

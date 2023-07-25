import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { FaMapPin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaGithub, FaMailBulk } from "react-icons/fa";

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
              <Link href="/">Skills</Link>
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

            <h2 className="subheading mb-5">Jobs</h2>
            <div className="job-container">
              <div className="job-position">
                <p>
                  <Link href="https://alphaline.wtf/" target="_blank">
                    <div className="flex items-center">
                      Alphaline{" "}
                      <FiExternalLink
                        className="ml-1"
                        color="white"
                        size={15}
                      />
                    </div>
                  </Link>
                  <span>
                    {" "}
                    co-founder, full-stack developer & data engineer{" "}
                  </span>
                </p>
              </div>
              <p className="job-date">Mar 2023 - Present</p>
            </div>
            <div className="job-container">
              <div className="job-position">
                <p>
                  <Link href="https://helius.xyz/" target="_blank">
                    <div className="flex items-center">
                      Helius{" "}
                      <FiExternalLink
                        className="ml-1"
                        color="white"
                        size={15}
                      />
                    </div>
                  </Link>{" "}
                  <span> Developer Relations </span>
                </p>
              </div>
              <p className="job-date">Jan 2023 - Present</p>
            </div>
            <div className="job-container">
              <div className="job-position">
                <p>
                  <Link href="https://infograph.com.jo/" target="_blank">
                    <div className="flex items-center">
                      Infograph{" "}
                      <FiExternalLink
                        className="ml-1"
                        color="white"
                        size={15}
                      />
                    </div>
                  </Link>{" "}
                  <span> Site Reliability Engineer Intern </span>
                </p>
              </div>
              <p className="job-date">May - Aug 2022</p>
            </div>
            <div className="job-container">
              <div className="job-position">
                <p>
                  <Link href="https://www.qmind.ca/" target="_blank">
                    <div className="flex items-center">
                      QMIND{" "}
                      <FiExternalLink
                        className="ml-1"
                        color="white"
                        size={15}
                      />
                    </div>
                  </Link>{" "}
                  <span> Smart Contract Developer </span>
                </p>
              </div>
              <p className="job-date">Sept - Aug 2022</p>
            </div>
            <div className="job-container">
              <div className="job-position">
                <p>
                  <Link href="https://infograph.com.jo/" target="_blank">
                    <div className="flex items-center">
                      Infograph{" "}
                      <FiExternalLink
                        className="ml-1"
                        color="white"
                        size={15}
                      />
                    </div>
                  </Link>{" "}
                  <span> Frontend Engineer Intern </span>
                </p>
              </div>
              <p className="job-date">May - Aug 2021</p>
            </div>
          </div>

          {/* <div className="divider" /> */}

          <h2 className="subheading mb-5">Technical Skills</h2>
          <div class="skills-container mt-[20px]">
            <div class="skill-column">
              <p class="skill-heading">Languages</p>
              <p class="skill-item">JavaScript</p>
              <p class="skill-item">Typescript</p>
              <p class="skill-item">Python</p>
              <p class="skill-item">Rust</p>
              <p class="skill-item">Solidity</p>
              <p class="skill-item">PHP</p>
              <p class="skill-item">Java</p>
              <p class="skill-item">SQL</p>
              <p class="skill-item">HTML/CSS</p>
            </div>

            <div class="skill-column">
              <p class="skill-heading">Frameworks</p>
              <p class="skill-item">React</p>
              <p class="skill-item">Next.js</p>
              <p class="skill-item">Svelte</p>
              <p class="skill-item">Vue</p>
              <p class="skill-item">Angular</p>
              <p class="skill-item">jQuery</p>
              <p class="skill-item">TailwindCSS</p>
              <p class="skill-item">Bootstrap</p>
              <p class="skill-item">Flask</p>
            </div>

            <div class="skill-column">
              <p class="skill-heading">Technologies</p>
              <p class="skill-item">Node.js</p>
              <p class="skill-item">GraphQL</p>
              <p class="skill-item">Elasticsearch</p>
              <p class="skill-item">PostgreSQL</p>
              <p class="skill-item">MongoDB</p>
              <p class="skill-item">MsSQL</p>
              <p class="skill-item">Redux</p>
              <p class="skill-item">Prisma</p>
              <p class="skill-item">Kafka</p>
            </div>

            <div class="skill-column">
              <p class="skill-heading">DevOps</p>
              <p class="skill-item">Docker</p>
              <p class="skill-item">AWS</p>
              <p class="skill-item">Kubernetes</p>
              <p class="skill-item">Vercel</p>
              <p class="skill-item">GitHub Actions</p>
              <p class="skill-item">Google Cloud Platform </p>
              <p class="skill-item">Fly</p>
              <p class="skill-item">Terraform</p>
              <p class="skill-item">Firebase</p>
            </div>
          </div>

          <div className="divider" />

          <h2 className="subheading mb-5">Contact</h2>
          <div class="contact-container">
            <div class="contact-item">
              <FaTwitter size={20} />
              <p class="contact-heading">
                Twitter{" "}
                <Link
                  href="https://twitter.com/0xC02_"
                  target="_blank"
                  className="border-b-[1px] border-current pb-[-1px] opacity-[0.99]"
                >
                  0xC02
                </Link>
              </p>
            </div>
            <div class="contact-item">
              <FaGithub size={20} />
              <p class="contact-heading">GitHub</p>
              <p class="contact-text">
                <Link
                  href="https://github.com/KhalilJouaneh"
                  target="_blank"
                  className="border-b-[1px] border-current pb-[-1px] opacity-[0.99]"
                >
                  KhalilJouaneh
                </Link>
              </p>
            </div>
            <div class="contact-item">
              <FaLinkedin size={20} />
              <p class="contact-heading">LinkedIn</p>
              <p class="contact-text">
                {" "}
                <Link
                  href="https://www.linkedin.com/in/khaliljouaneh/"
                  target="_blank"
                  className="border-b-[1px] border-current pb-[-1px] opacity-[0.99]"
                >
                  KhalilJouaneh
                </Link>
              </p>
            </div>
            <div class="contact-item">
              <FaMailBulk size={20} />
              <p class="contact-heading">Email</p>
              <p class="contact-text">
                {" "}
                <Link
                  href="mailto:khalil.j448@gmail.com"
                  target="_blank"
                  className="border-b-[1px] border-current pb-[-1px] opacity-[0.99]"
                >
                  khalil.j4484@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

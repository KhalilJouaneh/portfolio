import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { FaMapPin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMailBulk,
  FaArrowRight,
} from "react-icons/fa";

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
              <Link href="#work">Work</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#projects">Projects</Link>
              <Link href="/">Resume</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>

          <div className="divider" />

          <div className="work-container" id="work">
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
                  <Link
                    href="https://alphaline.wtf/"
                    target="_blank"
                    className="flex items-center"
                  >
                    Alphaline{" "}
                    <FiExternalLink className="ml-1" color="white" size={15} />
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
                  <Link
                    href="https://helius.xyz/"
                    target="_blank"
                    className="flex items-center"
                  >
                    Helius{" "}
                    <FiExternalLink className="ml-1" color="white" size={15} />
                  </Link>{" "}
                  <span> Developer Relations </span>
                </p>
              </div>
              <p className="job-date">Jan 2023 - Present</p>
            </div>
            <div className="job-container">
              <div className="job-position">
                <p>
                  <Link
                    href="https://infograph.com.jo/"
                    target="_blank"
                    className="flex items-center"
                  >
                    Infograph{" "}
                    <FiExternalLink className="ml-1" color="white" size={15} />
                  </Link>{" "}
                  <span> Site Reliability Engineer Intern </span>
                </p>
              </div>
              <p className="job-date">May - Aug 2022</p>
            </div>
            <div className="job-container">
              <div className="job-position">
                <p>
                  <Link
                    href="https://www.qmind.ca/"
                    target="_blank"
                    className="flex items-center"
                  >
                    QMIND{" "}
                    <FiExternalLink className="ml-1" color="white" size={15} />
                  </Link>{" "}
                  <span> Smart Contract Developer </span>
                </p>
              </div>
              <p className="job-date">Sept - Aug 2022</p>
            </div>
            <div className="job-container">
              <div className="job-position">
                <p>
                  <Link
                    href="https://infograph.com.jo/"
                    target="_blank"
                    className="flex items-center"
                  >
                    Infograph{" "}
                    <FiExternalLink className="ml-1" color="white" size={15} />
                  </Link>{" "}
                  <span> Frontend Engineer Intern </span>
                </p>
              </div>
              <p className="job-date">May - Aug 2021</p>
            </div>
          </div>

          {/* <div className="divider" /> */}

          <h2 className="subheading mb-5" id="skills">Technical Skills</h2>
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
          {/* <div className="divider mb-10" /> */}
          <h2 className="subheading mb-5" id="projects">Projects</h2>

          <div className="project-container">
            <Link
              className="project-header"
              target="_blank"
              href="https://github.com/mustafa-tariqk/blockchain-medical-record"
            >
              MedRec <FaArrowRight className="right-arrow" />{" "}
            </Link>
            <p className="project-desc">
              Programmed smart contracts in Solidity as part of the blockchain
              design team to build a medical record system on the Ethereum
              blockchain. Implemented a Python-based AI for smart diagnosis
              predictions and integrated data visualizations.
            </p>

            <div className="flex mt-5">
              <div className="tech-stack">Solidity</div>
              <div className="tech-stack">Python</div>
              <div className="tech-stack">scikit-learn</div>
              <div className="tech-stack">Truffle</div>
            </div>
          </div>

          <div className="project-container">
            <Link
              className="project-header"
              target="_blank"
              href="https://exchange-slotting.vercel.app/"
            >
              Exchange Slotting Program <FaArrowRight className="right-arrow" />{" "}
            </Link>
            <p className="project-desc">
              Developed a web application using Typescript and Next.js to
              enhance the slotting process for the international programs office
              at Queen&apos;s University. Features include CSV parsing, Firebase
              authentication, and a sophisticated ranking system, benefiting
              over 500 exchange students. Ensured robustness with 60+ unit tests
              covering core functionalities.
            </p>

            <div className="flex mt-5">
              <div className="tech-stack">Next.js</div>
              <div className="tech-stack">React</div>
              <div className="tech-stack">TypeScript</div>
              <div className="tech-stack">Firebase</div>
              <div className="tech-stack">Zustand</div>
            </div>
          </div>

          <div className="project-container">
            <Link
              className="project-header"
              target="_blank"
              href="https://github.com/KhalilJouaneh/XRPL-GPT"
            >
              XRP Ledger GPT <FaArrowRight className="right-arrow" />{" "}
            </Link>
            <p className="project-desc">
              An interactive chatbot utilizing GPT-4, designed specifically for
              the XRP Ledger codebase. XRPL-GPT provides in-depth responses
              about the XRP Ledger's workings, linking directly to code
              references. Aimed at enhancing the developer experience, the
              system merges the core querying flow and UI from chatlangchain-js.
            </p>

            <div className="flex mt-5">
              <div className="tech-stack">Next.js</div>
              <div className="tech-stack">React</div>
              <div className="tech-stack">TypeScript</div>
              <div className="tech-stack">Docker</div>
              <div className="tech-stack">chatlangchain-js</div>
              <div className="tech-stack">OpenAI API</div>
            </div>
          </div>

          <div className="project-container">
            <Link
              className="project-header"
              target="_blank"
              href="https://docs.carbovalent.com/"
            >
              Carbovalent <FaArrowRight className="right-arrow" />{" "}
            </Link>
            <p className="project-desc">
              Developed the Carbovalent Protocol to enable the direct
              tokenization of carbon credits as NFTs on the Solana blockchain
              during the Solana Sandstrom hackathon.
            </p>

            <div className="flex mt-5">
              <div className="tech-stack">Next.js</div>
              <div className="tech-stack">TypeScript</div>
              <div className="tech-stack">Rust</div>
              <div className="tech-stack">GraphQL</div>
              <div className="tech-stack">TailwindCSS</div>
              <div className="tech-stack">Metaplex</div>
            </div>
          </div>

          <div className="project-container">
            <Link className="project-header" target="_blank" href="https://github.com/KhalilJouaneh/Climate-Risk-Visualization-">
              Climate Risk Visualization
              <FaArrowRight className="right-arrow" />{" "}
            </Link>
            <p className="project-desc">
              Created a website that dynamically displays climate risk data
              through interactive maps, tables, and charts, offering users a
              comprehensive visual understanding of evolving environmental
              challenges.
            </p>

            <div className="flex mt-5">
              <div className="tech-stack">Next.js</div>
              <div className="tech-stack">React</div>
              <div className="tech-stack">chart.js</div>
              <div className="tech-stack">Rest APIs</div>
            </div>
          </div>

          <div className="divider" />

          <h2 className="subheading mb-5" id="contact">Contact</h2>
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

        <div className="footer">
          <span className="footer-text-left">KhalilJouaneh</span>
          <hr className="footer-line" />
          <span className="footer-text-right">
            @2023 KhalilJouaneh copyright. All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
}

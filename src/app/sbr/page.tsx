import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { sbrHe } from "@/data/content";

export default function SbrHePage() {
  return (
    <div dir="rtl" lang="he">
      <Header locale="he" />
      <section className="page-hero">
        <Image src={sbrHe.images.banner} alt="SBR" fill priority sizes="100vw" />
        <div className="page-hero-inner">
          <p className="eyebrow">Solutions</p>
          <h1>SBR</h1>
          <p style={{ maxWidth: "40rem", marginTop: "1rem" }}>{sbrHe.title}</p>
          <p style={{ marginTop: "1rem" }}>
            <Link className="btn btn-solar" href="/sbr-eng">
              עבור לעמוד באנגלית
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-2">
          <Reveal>
            <div>
              <p className="eyebrow">TM</p>
              <h2 className="display" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", margin: "0.5rem 0 1rem" }}>
                {sbrHe.subtitle}
              </h2>
              <h3 style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}>{sbrHe.introTitle}</h3>
              <p>{sbrHe.intro}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Image src={sbrHe.images.compare} alt="SBR system" width={900} height={600} style={{ width: "100%", height: "auto", border: "1px solid var(--line)" }} />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>{sbrHe.problemsTitle}</h2>
            </div>
            <p style={{ maxWidth: "48rem" }}>{sbrHe.problems}</p>
          </Reveal>

          <Reveal>
            <h3 className="display" style={{ fontSize: "2.2rem", marginTop: "3rem" }}>
              {sbrHe.wantTitle}
            </h3>
            <ul className="stack-list" style={{ marginTop: "1rem", maxWidth: "48rem" }}>
              {sbrHe.wants.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>{sbrHe.advantagesTitle}</h2>
            </div>
          </Reveal>
          <div className="benefit-grid">
            {sbrHe.advantages.map((block, i) => (
              <Reveal key={block.title} delay={i * 0.06}>
                <article className="benefit-box">
                  <h3>{block.title}</h3>
                  <ul>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="highlight-row">
            {sbrHe.highlights.map((item) => (
              <div className="highlight-pill" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>{sbrHe.appsTitle}</h2>
            </div>
            <ul className="stack-list">
              {sbrHe.apps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}

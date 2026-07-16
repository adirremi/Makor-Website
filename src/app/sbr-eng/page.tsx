import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { sbrEn } from "@/data/content";

export default function SbrEnPage() {
  return (
    <>
      <Header />
      <section className="page-hero">
        <Image src={sbrEn.images.banner} alt="SBR" fill priority sizes="100vw" />
        <div className="page-hero-inner">
          <p className="eyebrow">Solutions</p>
          <h1>SBR</h1>
          <p style={{ maxWidth: "42rem", marginTop: "1rem" }}>{sbrEn.title}</p>
          <p style={{ marginTop: "1rem" }}>
            <Link className="btn btn-solar" href="/sbr">
              עבור לעמוד בעברית
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
                {sbrEn.subtitle}
              </h2>
              <h3 style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}>{sbrEn.introTitle}</h3>
              <p>{sbrEn.intro}</p>
              <p style={{ marginTop: "1.25rem" }}>
                <Link className="btn" href="/#contact">
                  Contact us for more information
                </Link>
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Image
              src={sbrEn.images.extra || sbrEn.images.compare}
              alt="SBR cooling towers"
              width={900}
              height={600}
              style={{ width: "100%", height: "auto", border: "1px solid var(--line)" }}
            />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>{sbrEn.problemsTitle}</h2>
            </div>
            <p style={{ maxWidth: "48rem" }}>{sbrEn.problems}</p>
          </Reveal>
          <Reveal>
            <h3 className="display" style={{ fontSize: "2.2rem", marginTop: "3rem" }}>
              {sbrEn.wantTitle}
            </h3>
            <ul className="stack-list" style={{ marginTop: "1rem", maxWidth: "48rem" }}>
              {sbrEn.wants.map((item) => (
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
              <h2>{sbrEn.advantagesTitle}</h2>
            </div>
          </Reveal>
          <div className="benefit-grid">
            {sbrEn.advantages.map((block, i) => (
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
            {sbrEn.highlights.map((item) => (
              <div className="highlight-pill" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split-2">
          <Reveal>
            <div>
              <div className="section-head">
                <h2>{sbrEn.appsTitle}</h2>
              </div>
              <ul className="stack-list">
                {sbrEn.apps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Image
              src={sbrEn.images.compare}
              alt="SBR advantage"
              width={900}
              height={600}
              style={{ width: "100%", height: "auto", border: "1px solid var(--line)" }}
            />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-panel">
          <Reveal>
            <h2 className="display" style={{ fontSize: "2.4rem", marginTop: 0 }}>
              {sbrEn.legionellaTitle}
            </h2>
            <p>{sbrEn.legionella}</p>
          </Reveal>
        </div>
      </section>
      <Footer />
    </>
  );
}

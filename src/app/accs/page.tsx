import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { accsHe } from "@/data/content";

export default function AccsHePage() {
  return (
    <div dir="rtl" lang="he">
      <Header locale="he" />
      <section className="page-hero">
        <Image src={accsHe.images.hero} alt="ACCS" fill priority sizes="100vw" />
        <div className="page-hero-inner">
          <p className="eyebrow">Solutions</p>
          <h1>ACCS</h1>
          <p style={{ maxWidth: "46rem", marginTop: "1rem" }}>{accsHe.title}</p>
          <p style={{ marginTop: "1rem" }}>
            <Link className="btn btn-solar" href="/accs-eng">
              עבור לעמוד באנגלית
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>{accsHe.problemsTitle}</h2>
            </div>
          </Reveal>
          <div className="benefit-grid">
            {accsHe.problems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="benefit-box">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <h2 className="display" style={{ fontSize: "clamp(2rem,4vw,3rem)", marginTop: 0 }}>
              {accsHe.solution}
            </h2>
          </Reveal>
          <div className="compare-grid" style={{ marginTop: "1.5rem" }}>
            <figure className="compare-item">
              <Image src={accsHe.images.without} alt={accsHe.before} width={800} height={500} style={{ width: "100%", height: "auto" }} />
              <figcaption>{accsHe.before}</figcaption>
            </figure>
            <figure className="compare-item">
              <Image src={accsHe.images.with} alt={accsHe.after} width={800} height={500} style={{ width: "100%", height: "auto" }} />
              <figcaption>{accsHe.after}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>{accsHe.benefitsTitle}</h2>
            </div>
            <ul className="stack-list">
              {accsHe.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split-2">
          <Reveal>
            <div>
              <h2 className="display" style={{ fontSize: "2.4rem", marginTop: 0 }}>
                {accsHe.howTitle}
              </h2>
              <Image
                src={accsHe.images.system}
                alt="ACCS TM System"
                width={900}
                height={600}
                style={{ width: "100%", height: "auto", marginTop: "1rem", border: "1px solid var(--line)" }}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="display" style={{ fontSize: "2.4rem", marginTop: 0 }}>
                {accsHe.clientsTitle}
              </h2>
              <Image
                src={accsHe.images.clients}
                alt={accsHe.clientsTitle}
                width={700}
                height={400}
                style={{ width: "100%", height: "auto", marginTop: "1rem", border: "1px solid var(--line)" }}
              />
              <p style={{ marginTop: "1.25rem" }}>{accsHe.tagline}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-panel">
          <Reveal>
            <h2 className="display" style={{ fontSize: "2.2rem", marginTop: 0 }}>
              {accsHe.question}
            </h2>
            <p>{accsHe.answer}</p>
            <p>
              <strong>{accsHe.savings}</strong>
            </p>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}

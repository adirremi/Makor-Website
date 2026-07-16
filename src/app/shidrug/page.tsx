import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { shidrug, site } from "@/data/content";

export default function ShidrugPage() {
  return (
    <div dir="rtl" lang="he">
      <Header locale="he" />
      <section className="hero">
        <div className="hero-media">
          <Image src={shidrug.images[0]} alt="שדרוג מערכות סולאריות" fill priority sizes="100vw" />
        </div>
        <div className="hero-veil" />
        <div className="hero-grid" />
        <div className="hero-content">
          <p className="eyebrow">השבחה ושדרוג</p>
          <h1 className="hero-brand" style={{ fontSize: "clamp(3.5rem,10vw,7rem)" }}>
            מק<span>ור</span>
          </h1>
          <div className="hero-copy">
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.1rem)" }}>{shidrug.hero}</h2>
            <p>{shidrug.free}</p>
            <div className="hero-actions">
              <a className="btn btn-solar" href="#lead">
                {shidrug.cta}
              </a>
              <a
                className="btn btn-ghost"
                href={`https://wa.me/972${site.phoneShidrug.replace(/-/g, "").slice(1)}`}
                target="_blank"
                rel="noreferrer"
              >
                {shidrug.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="benefit-grid">
            {shidrug.points.map((point, i) => (
              <Reveal key={point} delay={i * 0.06}>
                <article className="benefit-box">
                  <h3>{point}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split-2">
          <Reveal>
            <Image
              src={shidrug.images[1]}
              alt="שדרוג סולארי"
              width={900}
              height={700}
              style={{ width: "100%", height: "auto", border: "1px solid var(--line)" }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="display" style={{ fontSize: "2.6rem", marginTop: 0 }}>
                {shidrug.proTitle}
              </h2>
              <p>{shidrug.proBody}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split-2">
          <Reveal>
            <div>
              <h2 className="display" style={{ fontSize: "2.6rem", marginTop: 0 }}>
                {shidrug.howTitle}
              </h2>
              <p>{shidrug.howBody}</p>
              <p style={{ marginTop: "1.25rem", fontFamily: "var(--font-display)", fontSize: "1.8rem" }}>
                {shidrug.closer}
              </p>
              <p>
                {shidrug.talk}
                <br />
                <a href={`tel:${site.phoneShidrug}`}>{site.phoneShidrug}</a>
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="gallery" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {shidrug.images.slice(2, 6).map((src) => (
                <Image key={src} src={src} alt="שדרוג מערכת סולארית" width={600} height={400} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="lead" style={{ paddingTop: 0 }}>
        <div className="container contact-panel" style={{ maxWidth: "40rem", marginInline: "auto" }}>
          <h2 className="display" style={{ fontSize: "2.2rem", marginTop: 0 }}>
            {shidrug.cta}
          </h2>
          <ContactForm thanks={shidrug.thanks} rtl />
        </div>
      </section>
      <Footer />
    </div>
  );
}

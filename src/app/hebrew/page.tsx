import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { homeHe, projects, site } from "@/data/content";

export default function HebrewHomePage() {
  return (
    <div dir="rtl" lang="he">
      <Header locale="he" />

      <section className="hero">
        <div className="hero-media">
          <Image src="/brand/hero-field.jpg" alt="מקור פתרונות אנרגיה" fill priority sizes="100vw" />
        </div>
        <div className="hero-veil" />
        <div className="hero-grid" />
        <div className="hero-ray" />
        <div className="hero-content">
          <p className="eyebrow">אנרגיה מתחדשת</p>
          <h1 className="hero-brand">
            מק<span>ור</span>
          </h1>
          <div className="hero-copy">
            <h2>{homeHe.heroLine1}</h2>
            <p>{homeHe.heroLine2}</p>
            <div className="hero-actions">
              <Link className="btn btn-solar" href="#projects">
                פרויקטים
              </Link>
              <Link className="btn btn-ghost" href="#contact">
                יצירת קשר
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">מה אנחנו עושים</p>
              <h2>{homeHe.servicesTitle}</h2>
            </div>
          </Reveal>
          <div className="services-grid">
            {homeHe.services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.08}>
                <article className="service-panel">
                  <Image
                    src={
                      i === 0
                        ? "/brand/services.jpg"
                        : i === 1
                          ? "/images/0bbbe2_bb5abaa50f0d4b76b51dcc2bbf86ff45_mv2_d_2000_1500_s_2.jpg"
                          : "/images/0bbbe2_209d6de1ee2b4a2ebf2f73ffcef473b5_mv2_d_1600_1200_s_2.jpg"
                    }
                    alt={service.title}
                    fill
                    sizes="33vw"
                  />
                  <div className="service-panel-inner">
                    <h3>{service.title}</h3>
                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container about-layout">
          <Reveal>
            <div className="about-media">
              <Image src="/brand/about.jpg" alt="אודות מקור" fill sizes="50vw" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="section-head">
                <p className="eyebrow">עלינו</p>
                <h2>{homeHe.aboutTitle}</h2>
              </div>
              <p>{homeHe.aboutBody}</p>
              <p style={{ marginTop: "1.5rem" }}>
                <Link className="btn" href="/team">
                  הכירו את הצוות
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="why-band">
        <Image src="/brand/hero-water.jpg" alt="סולארי צף" fill sizes="100vw" />
        <div className="why-inner">
          <Reveal>
            <h2>{homeHe.whyHeadline}</h2>
            <p>{homeHe.whyNote}</p>
            <p style={{ marginTop: "1.5rem" }}>
              <a className="btn btn-solar" href={site.dnvUrl} target="_blank" rel="noreferrer">
                לקריאה
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">עבודות נבחרות</p>
              <h2>{homeHe.projectsTitle}</h2>
            </div>
            <div className="project-cats">
              {homeHe.projectCategories.map((cat) => (
                <span className="chip" key={cat}>
                  {cat}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="projects-mosaic">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="project-tile">
                <Image src={project.images[0]} alt={project.title} fill sizes="33vw" />
                <div className="project-tile-meta">
                  <strong>{project.title}</strong>
                  <span>{project.capacity}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="clients">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>{homeHe.clientsTitle}</h2>
            </div>
            <div className="clients-layout">
              <Image src="/brand/carpi.png" alt="Carpi" width={220} height={120} />
              <p>{homeHe.carpiBody}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>{homeHe.contactTitle}</h2>
            </div>
          </Reveal>
          <div className="contact-grid">
            <div className="contact-panel">
              <h3>{homeHe.officeTitle}</h3>
              <p>
                {site.addressHe}
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                Tel/Fax: {site.phoneLocal}
              </p>
              <h3 style={{ marginTop: "1.5rem" }}>{homeHe.phoneTitle}</h3>
              <p>{site.phoneLocal}</p>
            </div>
            <div className="contact-panel">
              <h3>{homeHe.quoteTitle}</h3>
              <ContactForm thanks={homeHe.formSuccess} rtl />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

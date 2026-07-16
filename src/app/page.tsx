import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { homeEn, projects, site } from "@/data/content";

export default function HomePage() {
  const landAndRoof = projects.filter((p) => p.category !== "Reservoirs");

  return (
    <>
      <Header locale="en" />

      <section className="hero">
        <div className="hero-media">
          <Image
            src="/brand/hero-solar.jpg"
            alt="MAKOR solar infrastructure"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-veil" />
        <div className="hero-grid" />
        <div className="hero-ray" />
        <div className="hero-content">
          <p className="eyebrow">Renewable Energy · Israel</p>
          <h1 className="hero-brand">
            MAK<span>OR</span>
          </h1>
          <div className="hero-copy">
            <h2>{homeEn.heroLine1}</h2>
            <p>
              {homeEn.heroLine2}
              <br />
              {homeEn.heroLine3}
            </p>
            <div className="hero-actions">
              <Link className="btn btn-solar" href="#projects">
                PROJECTS
              </Link>
              <Link className="btn btn-ghost" href="#contact">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">What we deliver</p>
              <h2>{homeEn.servicesTitle}</h2>
            </div>
          </Reveal>
          <div className="services-grid">
            {homeEn.services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.08}>
                <article className="service-panel">
                  <Image src={service.image} alt={service.title} fill sizes="33vw" />
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
              <Image src="/brand/about.jpg" alt="MAKOR Energy Solutions" fill sizes="50vw" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="section-head">
                <p className="eyebrow">Company</p>
                <h2>{homeEn.aboutTitle}</h2>
              </div>
              <p>{homeEn.aboutIntro}</p>

              <div className="about-block">
                <h3>{homeEn.visionTitle}</h3>
                <p>{homeEn.vision}</p>
              </div>

              <div className="about-block">
                <h3>{homeEn.whatWeDoTitle}</h3>
                <ul className="stack-list">
                  {homeEn.whatWeDo.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="capability-grid">
                {homeEn.capabilities.map((item) => (
                  <div className="capability-item" key={item}>
                    {item}
                  </div>
                ))}
              </div>

              <p style={{ marginTop: "1.75rem" }}>
                <Link className="btn" href="/team">
                  {homeEn.teamCta}
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="why-band" id="why">
        <Image src="/brand/why.jpg" alt="Floating solar systems" fill sizes="100vw" />
        <div className="why-inner">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--solar-hot)" }}>
              {homeEn.whyTitle}
            </p>
            <h2>{homeEn.whyHeadline}</h2>
            <h3>{homeEn.whySub}</h3>
            <p>{homeEn.whyNote}</p>
            <p style={{ marginTop: "1.5rem" }}>
              <a className="btn btn-solar" href={site.dnvUrl} target="_blank" rel="noreferrer">
                {homeEn.whyCta}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Portfolio</p>
              <h2>{homeEn.projectsTitle}</h2>
            </div>
            <div className="project-cats">
              {homeEn.projectCategories.map((cat) => (
                <span className="chip" key={cat}>
                  {cat}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="projects-mosaic">
            {homeEn.reservoirs.map((item) => (
              <Link
                key={item.title}
                href={item.title.includes("SDEROT") ? "/projects/sderot" : "/projects/yarmuchin"}
                className="project-tile"
              >
                <Image src={item.image} alt={item.title} fill sizes="50vw" />
                <div className="project-tile-meta">
                  <strong>{item.title.split(" - ")[0]}</strong>
                  <span>{item.title}</span>
                </div>
              </Link>
            ))}
            {landAndRoof.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="project-tile">
                <Image src={project.images[0]} alt={project.title} fill sizes="33vw" />
                <div className="project-tile-meta">
                  <strong>{project.title}</strong>
                  <span>
                    {project.category} · {project.capacity}
                  </span>
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
              <p className="eyebrow">Partners</p>
              <h2>{homeEn.clientsTitle}</h2>
            </div>
            <div className="clients-layout">
              <Image src="/brand/carpi.png" alt="Carpi" width={220} height={120} />
              <div>
                <h3 className="display" style={{ fontSize: "1.8rem", marginTop: 0 }}>
                  {homeEn.carpiTitle}
                </h3>
                <p>{homeEn.carpiBody}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Connect</p>
              <h2>{homeEn.contactTitle}</h2>
            </div>
          </Reveal>
          <div className="contact-grid">
            <Reveal>
              <div className="contact-panel">
                <h3>{homeEn.headOffice}</h3>
                <p>
                  {site.address}
                  <br />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                  <br />
                  Tel/Fax: {site.phone}
                </p>
                <h3 style={{ marginTop: "2rem" }}>{homeEn.inquiries}</h3>
                <p>{homeEn.inquiriesText}</p>
                <h3 style={{ marginTop: "2rem" }}>{homeEn.employment}</h3>
                <p>{homeEn.employmentText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="contact-panel">
                <h3>{homeEn.getQuote}</h3>
                <ContactForm thanks={homeEn.formThanks} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

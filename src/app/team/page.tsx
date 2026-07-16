import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { team } from "@/data/content";

export default function TeamPage() {
  return (
    <>
      <Header />
      <section className="page-hero">
        <Image src="/brand/contact-bg.jpg" alt="TEAM" fill priority sizes="100vw" />
        <div className="page-hero-inner">
          <p className="eyebrow">People behind the power</p>
          <h1>TEAM</h1>
        </div>
      </section>

      <section className="section">
        <div className="container team-grid">
          {team.map((member, i) => (
            <Reveal key={member.email} delay={i * 0.06}>
              <article className="team-card">
                <h3>{member.name}</h3>
                <p>{member.bio}</p>
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

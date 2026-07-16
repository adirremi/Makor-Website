import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/content";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <section className="page-hero">
        <Image src="/brand/hero-water.jpg" alt="PROJECTS" fill priority sizes="100vw" />
        <div className="page-hero-inner">
          <p className="eyebrow">Built for performance</p>
          <h1>PROJECTS</h1>
        </div>
      </section>
      <section className="section">
        <div className="container projects-mosaic">
          {projects.map((project) => (
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
      </section>
      <Footer />
    </>
  );
}

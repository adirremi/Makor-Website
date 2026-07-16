import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <section className="page-hero">
        <Image src={project.images[0]} alt={project.title} fill priority sizes="100vw" />
        <div className="page-hero-inner">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p style={{ marginTop: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.14em" }}>
            {project.capacity}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {project.description ? (
            <p style={{ maxWidth: "46rem", fontSize: "1.1rem", marginBottom: "2rem" }}>
              {project.description}
            </p>
          ) : null}
          <div className="gallery">
            {project.images.map((src) => (
              <Image key={src} src={src} alt={project.title} width={1200} height={800} />
            ))}
          </div>
          <p style={{ marginTop: "2rem" }}>
            <Link className="btn" href="/#projects">
              BACK TO PROJECTS
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

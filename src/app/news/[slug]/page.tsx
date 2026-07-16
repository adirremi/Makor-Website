import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsPosts } from "@/data/content";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div dir="rtl" lang="he">
      <Header />
      <section className="page-hero">
        <Image src={post.image} alt={post.title} fill priority sizes="100vw" />
        <div className="page-hero-inner">
          <p className="eyebrow">
            {post.date} · {post.readTime}
          </p>
          <h1 style={{ fontSize: "clamp(2.2rem,6vw,4.2rem)" }}>{post.title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container prose" style={{ maxWidth: "46rem" }}>
          {post.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p style={{ marginTop: "2rem" }}>
            <Link className="btn" href="/news">
              חזרה לחדשות
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

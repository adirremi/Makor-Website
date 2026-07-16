import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { newsPosts } from "@/data/content";

export default function NewsPage() {
  return (
    <div dir="rtl" lang="he">
      <Header />
      <section className="page-hero">
        <Image src="/brand/hero-field.jpg" alt="NEWS" fill priority sizes="100vw" />
        <div className="page-hero-inner">
          <p className="eyebrow">Updates</p>
          <h1>NEWS</h1>
        </div>
      </section>

      <section className="section">
        <div className="container news-grid">
          {newsPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link href={`/news/${post.slug}`} className="news-card">
                <Image src={post.image} alt={post.title} width={800} height={440} />
                <div className="news-card-body">
                  <p className="eyebrow">
                    {post.date} · {post.readTime}
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.body[0]}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

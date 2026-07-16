"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

const clientLogos = [
  { src: "/images/0bbbe2_424423442df44ffe8db623c292c5a1aa_mv2.png", alt: "Enerpoint ISR" },
  { src: "/images/0bbbe2_719802419a654bf8b4b4094e523feb3a_mv2.png", alt: "Client partner" },
  { src: "/images/0bbbe2_00db02449b194e00a47cdefc878670c0_mv2.png", alt: "Client partner" },
  { src: "/images/0bbbe2_f9bdf498e7c143e69d416a3a8b441c6a_mv2.png", alt: "Client partner" },
  { src: "/images/0bbbe2_da6c935dae2e443c8c7ba0aa58d2cae6_mv2.png", alt: "Client partner" },
  { src: "/images/0bbbe2_1ae3e933e0654b9eb949079f5983d726_mv2.png", alt: "Client partner" },
  { src: "/images/0bbbe2_fa687c46ef0343ffa3a80ec975a368a6_mv2.png", alt: "Client partner" },
  { src: "/images/0bbbe2_437ac8cfdfd8452e9c673f450a360019_mv2.png", alt: "Meptagon" },
  { src: "/images/0bbbe2_6574ca8e62bd4e898171e8ffd25263a8_mv2.jpg", alt: "Client partner" },
  { src: "/images/0bbbe2_cd9747517c824036ac6f70431391fee9_mv2.jpg", alt: "Client partner" },
  { src: "/images/0bbbe2_fd6b2fcd881646a4a9453a87da669e34_mv2.png", alt: "Client partner" },
  { src: "/images/0bbbe2_c14460847a6048e1a38194cf3f8f1679_mv2.jpg", alt: "Client partner" },
  { src: "/images/0bbbe2_ef5b37ae64c4408a8a51186241107865_mv2.jpg", alt: "Client partner" },
  { src: "/images/0bbbe2_11e8089d590a4c30b83ce49aa21130c3_mv2.jpg", alt: "Client partner" },
  { src: "/images/0bbbe2_0a25b7c5daf74ab5b27a063889cb7f55_mv2.jpg", alt: "Client partner" },
  { src: "/images/0bbbe2_95b5f02b3d5a45aaa4d6b85ef1115d42_mv2.png", alt: "Carpi" },
];

type ClientsSectionProps = {
  title: string;
  eyebrow: string;
  carpiTitle: string;
  carpiBody: string;
  exclusiveLabel: string;
  trustLabel: string;
};

export default function ClientsSection({
  title,
  eyebrow,
  carpiTitle,
  carpiBody,
  exclusiveLabel,
  trustLabel,
}: ClientsSectionProps) {
  const loop = [...clientLogos, ...clientLogos];

  return (
    <section className="section clients-section" id="clients">
      <div className="container">
        <Reveal>
          <div className="section-head clients-head">
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            <p className="clients-trust">{trustLabel}</p>
          </div>
        </Reveal>
      </div>

      <div className="logo-marquee" aria-label="Client logos">
        <div className="logo-marquee-track">
          {loop.map((logo, i) => (
            <div className="logo-chip" key={`${logo.src}-${i}`}>
              <Image src={logo.src} alt={logo.alt} width={220} height={80} />
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ marginTop: "clamp(2rem, 5vw, 3.5rem)" }}>
        <Reveal>
          <article className="carpi-feature">
            <div className="carpi-visual">
              <div className="carpi-glow" />
              <div className="carpi-logo-wrap">
                <Image
                  src="/images/0bbbe2_95b5f02b3d5a45aaa4d6b85ef1115d42_mv2.png"
                  alt="Carpi"
                  width={320}
                  height={90}
                  priority
                />
              </div>
              <p className="carpi-exclusive">{exclusiveLabel}</p>
            </div>
            <div className="carpi-copy">
              <h3>{carpiTitle}</h3>
              <p>{carpiBody}</p>
            </div>
          </article>
        </Reveal>

        <div className="clients-grid">
          {clientLogos.slice(0, 12).map((logo, i) => (
            <Reveal key={logo.src} delay={(i % 6) * 0.04}>
              <div className="client-tile">
                <Image src={logo.src} alt={logo.alt} width={240} height={100} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

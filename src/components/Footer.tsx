import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <small>{site.copyright}</small>
        <small>MAKOR Energy Solutions</small>
      </div>
    </footer>
  );
}

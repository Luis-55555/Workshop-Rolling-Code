import "./footer.css";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Github,
} from "lucide-brands";

import { X } from "lucide-react";


const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/" },
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/" },
  { name: "X", icon: X, url: "https://x.com/" },
  { name: "GitHub", icon: Github, url: "https://github.com/" },
];

export default function Footer() {
  return (
    <footer className="rc-footer">
      <div className="rc-footer__inner rc-container">
        <a
          href=""
          className="rc-footer__logo"
          aria-label="Rolling Code, inicio"
        >
          <img
            src="src/assets/Logo/rclogo-dark-bad41e62.png"
            alt="Rolling Code School"
          />
        </a>

        <nav
          className="rc-footer__socials"
          aria-label="Redes sociales"
        >
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <a
              key={name}
              href={url}
              className="rc-footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
            >
              <Icon size={18} strokeWidth={2} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

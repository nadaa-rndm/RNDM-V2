import { Fragment } from "react";
import { footer } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>{footer.legal}</span>
      <span>
        {footer.links.map((link, index) => (
          <Fragment key={link.href}>
            {index > 0 && " · "}
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener" : undefined}
              style={{ color: link.color }}
            >
              {link.label}
            </a>
          </Fragment>
        ))}
      </span>
    </footer>
  );
}

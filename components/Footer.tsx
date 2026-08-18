import { CONTACT_EMAIL } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>RNDM FINTECH © 2026 · LDN · BLR · ATX</span>
      <span>
        <a href="https://buoy.finance" target="_blank" rel="noopener" className={styles.cathena}>
          CATHENA
        </a>{" "}
        ·{" "}
        <a href="#dudu" className={styles.dudu}>
          DUDU
        </a>{" "}
        ·{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className={styles.mail}>
          {CONTACT_EMAIL.toUpperCase()}
        </a>
      </span>
    </footer>
  );
}

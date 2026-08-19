import { compose, CONTACT_MAILTO } from "@/lib/content";
import styles from "./Compose.module.css";

export default function Compose() {
  return (
    <section id="compose" className={styles.compose}>
      <h2 className={styles.title}>
        {compose.title}
        <br />
        <em>{compose.titleEm}</em>
      </h2>
      <p className={styles.sub}>{compose.sub}</p>

      <a href={CONTACT_MAILTO} className={styles.field}>
        <span className={styles.placeholder}>{compose.placeholder}</span>
        <span className={styles.send}>{compose.send}</span>
      </a>
    </section>
  );
}

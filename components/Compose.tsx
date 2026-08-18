import { CONTACT_MAILTO } from "@/lib/site";
import styles from "./Compose.module.css";

export default function Compose() {
  return (
    <section id="compose" className={styles.compose}>
      <h2 className={styles.title}>
        Send one task you&apos;d rather
        <br />
        <em>not do again.</em>
      </h2>
      <p className={styles.sub}>Two lines is enough. Scope and fee within a working day.</p>

      <a href={CONTACT_MAILTO} className={styles.field}>
        <span className={styles.placeholder}>Describe the task…</span>
        <span className={styles.send}>Send →</span>
      </a>
    </section>
  );
}

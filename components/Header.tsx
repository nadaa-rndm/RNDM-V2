import { header } from "@/lib/content";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.mark} aria-hidden="true">
          <i />
          <i className={styles.accent} />
          <i />
          <i />
          <i className={styles.hollow} />
          <i />
          <i />
          <i />
          <i />
        </span>
        {header.brand}
      </div>

      <div className={styles.ticker}>
        {header.ticker.map((item) => (
          <span key={item.label}>
            {item.label}
            <span style={{ color: item.color }}>{item.value}</span>
          </span>
        ))}
      </div>

      <nav className={styles.nav}>
        {header.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a href={header.cta.href} className={styles.cta}>
        {header.cta.label}
      </a>
    </header>
  );
}

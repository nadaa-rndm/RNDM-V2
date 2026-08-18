import styles from "./Header.module.css";

const NAV = [
  { href: "#desk", label: "The desk" },
  { href: "#transcript", label: "Transcript" },
  { href: "#work", label: "Work" },
];

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
        RNDM FINTECH
      </div>

      <nav className={styles.nav}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a href="#compose" className={styles.cta}>
        Send a task
      </a>
    </header>
  );
}

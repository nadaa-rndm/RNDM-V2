import type { ReactNode } from "react";
import styles from "./Section.module.css";

export { styles as sectionStyles };

export function Section({
  id,
  sunken = false,
  className,
  children,
}: {
  id?: string;
  sunken?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={[styles.section, sunken ? styles.sunken : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return <div className={styles.shell}>{children}</div>;
}

export function SectionHead({
  title,
  eyebrow,
  titleClassName,
}: {
  title: ReactNode;
  eyebrow: string;
  titleClassName?: string;
}) {
  return (
    <div className={styles.head}>
      <h2 className={[styles.title, styles.marked, titleClassName].filter(Boolean).join(" ")}>
        {title}
      </h2>
      <span className={styles.eyebrow}>{eyebrow}</span>
    </div>
  );
}

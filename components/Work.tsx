import { Section, SectionHead, Shell, sectionStyles } from "./Section";
import styles from "./Work.module.css";

const PROJECTS = [
  {
    id: "cathena",
    name: "Cathena",
    href: "https://buoy.finance",
    external: true,
    accent: "var(--blue)",
    cover: "radial-gradient(120% 160% at 10% 0%, var(--blue-deep) 0%, var(--surface) 75%)",
    stat: "14.0% APY",
    blurb: "Yield & lending desk on Aptos — a terminal, not a casino.",
    link: "buoy.finance ↗",
  },
  {
    id: "dudu",
    name: "Dudu",
    href: "#compose",
    external: false,
    accent: "var(--amber)",
    cover: "radial-gradient(120% 160% at 90% 0%, #4a3308 0%, var(--surface) 75%)",
    stat: "MASCOT AGENT",
    blurb: "Mascot agent — proof a financial agent can have a face.",
    link: "CASE STUDY",
  },
];

export default function Work() {
  return (
    <Section id="work">
      <Shell>
        <SectionHead title="Live from Ganesh's desk" eyebrow="EXAMPLES · 2025—26" />

        <div className={`${sectionStyles.grid} ${sectionStyles.cols2}`}>
          {PROJECTS.map((project) => (
            <a
              key={project.id}
              id={project.id}
              href={project.href}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener" : undefined}
              className={styles.card}
              style={{ "--accent": project.accent } as React.CSSProperties}
            >
              <div className={styles.cover} style={{ background: project.cover }}>
                <span className={styles.coverName}>{project.name}</span>
                <span className={styles.coverMeta}>{project.stat}</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.blurb}>{project.blurb}</span>
                <span className={styles.link}>{project.link}</span>
              </div>
            </a>
          ))}
        </div>
      </Shell>
    </Section>
  );
}

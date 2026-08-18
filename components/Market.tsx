import { Section, SectionHead, Shell, sectionStyles } from "./Section";
import styles from "./Market.module.css";

const STATS = [
  {
    value: "$29B",
    color: "var(--blue)",
    caption: "Tokenised RWA value onchain, ex-stablecoins — Q1 2026",
  },
  {
    value: "+140%",
    color: "var(--green)",
    caption: "Tokenised equity market-cap growth through 2026, to ~$2B",
  },
  {
    value: "$13.4B",
    color: "var(--amber)",
    caption: "Tokenised US Treasuries — the largest, fastest-moving class",
  },
];

export default function Market() {
  return (
    <Section id="why" sunken>
      <Shell>
        <SectionHead
          titleClassName={styles.narrow}
          title={
            <>
              The market got real. <em>Desks didn&apos;t scale.</em>
            </>
          }
          eyebrow="SOURCES: RWA.XYZ · DEFILLAMA · 2026"
        />

        <div className={`${sectionStyles.grid} ${sectionStyles.cols3}`}>
          {STATS.map((stat) => (
            <div key={stat.value} className={styles.stat}>
              <span className={styles.value} style={{ color: stat.color }}>
                {stat.value}
              </span>
              <span className={styles.caption}>{stat.caption}</span>
            </div>
          ))}
        </div>
      </Shell>
    </Section>
  );
}

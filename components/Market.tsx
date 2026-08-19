import { market } from "@/lib/content";
import { Section, SectionHead, Shell, sectionStyles } from "./Section";
import styles from "./Market.module.css";

export default function Market() {
  return (
    <Section id="why" sunken>
      <Shell>
        <SectionHead
          titleClassName={styles.narrow}
          title={
            <>
              {market.title} <em>{market.titleEm}</em>
            </>
          }
          eyebrow={market.eyebrow}
        />

        <div className={`${sectionStyles.grid} ${sectionStyles.cols3}`}>
          {market.stats.map((stat) => (
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

import { onboarding } from "@/lib/content";
import { Section, SectionHead, Shell, sectionStyles } from "./Section";
import styles from "./Onboarding.module.css";

export default function Onboarding() {
  return (
    <Section id="onboard">
      <Shell>
        <SectionHead title={onboarding.title} eyebrow={onboarding.eyebrow} />

        <div className={`${sectionStyles.grid} ${sectionStyles.cols4}`}>
          {onboarding.phases.map((phase) => (
            <div key={phase.name} className={styles.phase}>
              <span className={styles.gate} style={{ color: phase.color }}>
                {phase.gate}
              </span>
              <span className={styles.name}>{phase.name}</span>
              <p className={styles.copy}>{phase.copy}</p>
            </div>
          ))}
        </div>
      </Shell>
    </Section>
  );
}

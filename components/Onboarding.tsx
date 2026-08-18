import { Section, SectionHead, Shell, sectionStyles } from "./Section";
import styles from "./Onboarding.module.css";

const PHASES = [
  {
    gate: "WK 01 · GATE 01",
    color: "var(--blue)",
    name: "Shadow",
    copy: "The agent watches your desk work and drafts its own notes.",
  },
  {
    gate: "WK 02 · GATE 02",
    color: "var(--green)",
    name: "Assist",
    copy: "It proposes; a human approves. Every correction becomes an eval case.",
  },
  {
    gate: "WK 03 · GATE 03",
    color: "var(--amber)",
    name: "Operate",
    copy: "Clear cases end to end; the rest escalated with reasoning attached.",
  },
  {
    gate: "WK 04 · HANDOVER",
    color: "var(--red)",
    name: "Review",
    copy: "Accuracy, cost per task and escalation rate against week one.",
  },
];

export default function Onboarding() {
  return (
    <Section id="onboard">
      <Shell>
        <SectionHead title="Four weeks, like a new joiner" eyebrow="FIXED FEE · EXIT AT ANY GATE" />

        <div className={`${sectionStyles.grid} ${sectionStyles.cols4}`}>
          {PHASES.map((phase) => (
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

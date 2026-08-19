import type { ReactNode } from "react";
import { desk } from "@/lib/content";
import { Section, SectionHead, Shell, sectionStyles } from "./Section";
import styles from "./Desk.module.css";

type Agent = {
  initial: string;
  name: string;
  role: string;
  accent: string;
  tint: string;
};

function Card({ agent, children }: { agent: Agent; children: ReactNode }) {
  return (
    <article
      className={styles.card}
      style={
        {
          "--accent": agent.accent,
          "--accent-tint": agent.tint,
        } as React.CSSProperties
      }
    >
      <div className={styles.identity}>
        <span className={styles.avatar}>{agent.initial}</span>
        <div>
          <div className={styles.name}>{agent.name}</div>
          <div className={styles.role}>{agent.role}</div>
        </div>
      </div>
      {children}
    </article>
  );
}

export default function Desk() {
  const { ganesh, adam, mira } = desk;

  return (
    <Section id="desk">
      <Shell>
        <SectionHead title={desk.title} eyebrow={desk.eyebrow} />

        <div className={`${sectionStyles.grid} ${sectionStyles.cols3}`}>
          <Card agent={ganesh}>
            <div className={styles.lines}>
              {ganesh.lines.map((line) => (
                <div key={line.label} className={styles.line}>
                  <span>{line.label}</span>
                  <span className={styles.lineTag}>{line.tag}</span>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <span className={styles.footerLabel}>{ganesh.footerLabel}</span>
              <div className={styles.links}>
                {ganesh.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={styles.link}
                    style={{ "--link-accent": link.accent } as React.CSSProperties}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Card>

          {[adam, mira].map((agent) => (
            <Card key={agent.name} agent={agent}>
              <p className={styles.blurb}>{agent.blurb}</p>
              <div className={styles.tags}>
                {agent.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Shell>
    </Section>
  );
}

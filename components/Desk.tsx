import { Section, SectionHead, Shell, sectionStyles } from "./Section";
import styles from "./Desk.module.css";

const GANESH_LINES = [
  { label: "Tokenised stocks & fund management", tag: "ANALYSIS" },
  { label: "Full portfolio manager", tag: "PRODUCT" },
  { label: "Banking solutions", tag: "RAILS" },
];

export default function Desk() {
  return (
    <Section id="desk">
      <Shell>
        <SectionHead title="The desk" eyebrow="THREE AGENTS · ONE PIPELINE" />

        <div className={`${sectionStyles.grid} ${sectionStyles.cols3}`}>
          {/* Ganesh — research */}
          <article
            className={styles.card}
            style={
              {
                "--accent": "var(--blue)",
                "--accent-deep": "var(--blue-deep)",
              } as React.CSSProperties
            }
          >
            <div className={styles.identity}>
              <span className={styles.avatar}>G</span>
              <div>
                <div className={styles.name}>Ganesh</div>
                <div className={styles.role}>RESEARCH ANALYST</div>
              </div>
            </div>

            <div className={styles.lines}>
              {GANESH_LINES.map((line) => (
                <div key={line.label} className={styles.line}>
                  <span>{line.label}</span>
                  <span className={styles.lineTag}>{line.tag}</span>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <span className={styles.footerLabel}>EXAMPLES FROM GANESH</span>
              <div className={styles.links}>
                <a
                  href="#cathena"
                  className={styles.link}
                  style={{ "--link-accent": "var(--blue)" } as React.CSSProperties}
                >
                  Cathena ↗
                </a>
                <a
                  href="#dudu"
                  className={styles.link}
                  style={{ "--link-accent": "var(--amber)" } as React.CSSProperties}
                >
                  Dudu ↗
                </a>
              </div>
            </div>
          </article>

          {/* Adam — engineering */}
          <article
            className={styles.card}
            style={
              {
                "--accent": "var(--green)",
                "--accent-deep": "var(--green-deep)",
              } as React.CSSProperties
            }
          >
            <div className={styles.identity}>
              <span className={styles.avatar}>A</span>
              <div>
                <div className={styles.name}>Adam</div>
                <div className={styles.role}>ENGINEERING</div>
              </div>
            </div>

            <p className={styles.blurb}>
              All your engineering needs — frontend and backend, contracts and infra, shipped as one
              stack and maintained after launch.
            </p>

            <div className={styles.tags}>
              {["FRONTEND", "BACKEND", "CONTRACTS"].map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Mira — marketing */}
          <article
            className={styles.card}
            style={
              {
                "--accent": "var(--amber)",
                "--accent-deep": "var(--amber-deep)",
              } as React.CSSProperties
            }
          >
            <div className={styles.identity}>
              <span className={styles.avatar}>M</span>
              <div>
                <div className={styles.name}>Mira</div>
                <div className={styles.role}>MARKETING</div>
              </div>
            </div>

            <p className={styles.blurb}>
              Marketing solutions end to end — launch videos, promotional material, and the
              narrative that makes a financial product legible.
            </p>

            <div className={styles.tags}>
              {["LAUNCH VIDEOS", "PROMO MATERIAL"].map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </Shell>
    </Section>
  );
}

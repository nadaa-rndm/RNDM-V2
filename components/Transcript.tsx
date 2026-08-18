import { Section } from "./Section";
import styles from "./Transcript.module.css";

const COVERAGE_ROWS = [
  { label: "xAAPL — tracking error", value: "8 bps · 6 sessions", color: "var(--green)" },
  { label: "Fund NAV drift vs index", value: "40 bps · rebalance queued", color: "var(--amber)" },
  { label: "Verdict", value: "BUILD — thesis attached", color: "var(--blue)", strong: true },
];

function Message({
  initial,
  accent,
  accentDeep,
  stamp,
  children,
}: {
  initial: string;
  accent: string;
  accentDeep: string;
  stamp: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={styles.message}
      style={{ "--accent": accent, "--accent-deep": accentDeep } as React.CSSProperties}
    >
      <span className={styles.avatar}>{initial}</span>
      <div className={styles.body}>
        <div className={styles.bubble}>{children}</div>
        <span className={styles.stamp}>{stamp}</span>
      </div>
    </div>
  );
}

export default function Transcript() {
  return (
    <Section id="transcript" sunken>
      <div className={styles.thread}>
        <div className={styles.head}>
          <h2 className={styles.title}>What a week with the desk reads like</h2>
          <span className={styles.eyebrow}>TRANSCRIPT · UNEDITED</span>
        </div>

        <div className={styles.fromYou}>
          <div className={styles.bubble}>
            We want to offer tokenised stocks to our customers. Can your desk take it?
          </div>
          <span className={styles.stamp}>YOU · 09:41</span>
        </div>

        <Message
          initial="G"
          accent="var(--blue)"
          accentDeep="var(--blue-deep)"
          stamp="GANESH · 09:44"
        >
          Yes. Coverage opens today — analysis note attached. Portfolio manager scope and banking
          rails follow this week.
        </Message>

        <div className={styles.attachment}>
          <div className={styles.attachmentHead}>
            <span className={styles.attachmentTitle}>⊕ RN-014 · TOKENISED EQUITY COVERAGE</span>
            <span className={styles.attachmentFile}>GANESH.PDF</span>
          </div>
          <div className={styles.rows}>
            {COVERAGE_ROWS.map((row) => (
              <div key={row.label} className={styles.row}>
                <span className={styles.rowLabel}>{row.label}</span>
                <span
                  className={styles.rowValue}
                  style={{ color: row.color, fontWeight: row.strong ? 500 : undefined }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Message
          initial="A"
          accent="var(--green)"
          accentDeep="var(--green-deep)"
          stamp="ADAM · DAY 08"
        >
          Picking up the spec. Frontend, backend and contracts are one stack on my desk.
        </Message>

        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <i style={{ background: "var(--red)" }} />
            <i style={{ background: "var(--amber)" }} />
            <i style={{ background: "var(--green)" }} />
            <span className={styles.terminalName}>adam@rndm — build.log</span>
          </div>
          <div className={styles.log}>
            <div>
              <span style={{ color: "var(--green)" }}>✓</span> pricing engine — 14 venues, 200ms
              refresh
            </div>
            <div>
              <span style={{ color: "var(--green)" }}>✓</span> trading &amp; portfolio UI
            </div>
            <div>
              <span style={{ color: "var(--amber)" }}>▸</span> settlement contracts — audit
              scheduled <span className={styles.caret}>▍</span>
            </div>
          </div>
        </div>

        <Message
          initial="M"
          accent="var(--amber)"
          accentDeep="var(--amber-deep)"
          stamp="MIRA · DAY 21"
        >
          Launch cut is ready — 45s film plus the promo kit. Storyboard attached; full video lands
          with the release.
        </Message>

        <div className={styles.storyboard}>
          <div className={`${styles.frame} ${styles.frameQuote}`}>“Your stocks, onchain”</div>
          <div className={`${styles.frame} ${styles.frameBars}`}>
            <span style={{ width: "60%", background: "var(--blue)" }} />
            <span style={{ width: "42%", background: "var(--green)" }} />
            <span style={{ width: "50%", background: "var(--amber)" }} />
          </div>
          <div className={`${styles.frame} ${styles.framePlay}`}>
            <span />
          </div>
          <div className={`${styles.frame} ${styles.frameLaunch}`}>LAUNCH DAY</div>
        </div>
      </div>
    </Section>
  );
}

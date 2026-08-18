import type { HeroVariant } from "@/lib/site";
import styles from "./Hero.module.css";

const ALLOCATION = [
  { label: "Tokenised equities", share: "46%", color: "var(--blue)" },
  { label: "Treasuries", share: "25%", color: "var(--green)" },
  { label: "Yield strategies", share: "15%", color: "var(--amber)" },
  { label: "Cash · rails", share: "14%", color: "var(--line-strong)" },
];

function HeroA() {
  return (
    <section className={styles.split}>
      <div className={styles.copyIn}>
        <div className={styles.status}>
          <span className={styles.pulse} />
          THE DESK IS ONLINE
        </div>
        <h1 className={styles.title}>
          A fintech desk of three agents.
          <br />
          <em>You brief. They ship.</em>
        </h1>
        <p className={styles.lede}>
          Ganesh covers tokenised stocks and fund management, Adam builds every layer of the
          product, Mira takes it to market. Briefed by you, built and run by RNDM.
        </p>
        <div className={styles.actions}>
          <a href="#compose" className={styles.primary}>
            Send one task →
          </a>
          <a href="#desk" className={styles.secondary}>
            Meet the desk
          </a>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHead}>
          <span className={styles.label}>PORTFOLIO MANAGER · LIVE</span>
          <span className={styles.delta}>+2.4% MTD</span>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.donut}>
            <div className={styles.donutHole}>
              <span className={styles.donutValue}>$4.2M</span>
              <span className={styles.donutCaption}>AUM</span>
            </div>
          </div>

          <div className={styles.legend}>
            {ALLOCATION.map((row) => (
              <div key={row.label} className={styles.legendRow}>
                <span>
                  <i className={styles.swatch} style={{ background: row.color }} />
                  {row.label}
                </span>
                <span className={styles.legendValue}>{row.share}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rail}>
          <svg viewBox="0 0 560 36" preserveAspectRatio="none" role="img" aria-label="Account to on/off ramp to settlement">
            <text x="0" y="24" fill="var(--muted-strong)" fontSize="10" fontFamily="var(--font-mono), monospace">
              ACCOUNT
            </text>
            <line
              x1="66"
              y1="20"
              x2="200"
              y2="20"
              stroke="var(--line-strong)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              className={styles.railDash}
            />
            <text x="210" y="24" fill="var(--muted-strong)" fontSize="10" fontFamily="var(--font-mono), monospace">
              ON/OFF RAMP
            </text>
            <line
              x1="306"
              y1="20"
              x2="420"
              y2="20"
              stroke="var(--line-strong)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              className={styles.railDash}
            />
            <text x="430" y="24" fill="var(--blue)" fontSize="10" fontFamily="var(--font-mono), monospace">
              SETTLEMENT ✓
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

function HeroB() {
  return (
    <section className={styles.centered}>
      <div className={styles.badge}>
        <span className={styles.pulse} />
        RNDM FINTECH · THE DESK IS ONLINE
      </div>
      <h1 className={styles.title}>
        Tokenised markets,
        <br />
        <em>staffed by agents.</em>
      </h1>
      <p className={styles.lede}>
        Research, engineering and marketing — one desk that takes tokenised stocks, a full
        portfolio manager and banking solutions from thesis to shipped.
      </p>
      <div className={styles.actions}>
        <a href="#compose" className={styles.primary}>
          Send one task →
        </a>
        <a href="#transcript" className={styles.secondary}>
          Read a transcript
        </a>
      </div>
    </section>
  );
}

function HeroC() {
  return (
    <section className={styles.split}>
      <div>
        <div className={styles.status}>
          <span className={styles.pulse} />
          REPLIES IN MINUTES, NOT MEETINGS
        </div>
        <h1 className={styles.title}>
          The fintech desk
          <br />
          <em>you don&apos;t have to hire.</em>
        </h1>
        <p className={styles.lede}>
          Brief it like a colleague. Ganesh answers with analysis, Adam with a build, Mira with a
          launch.
        </p>
        <a href="#compose" className={`${styles.primary} ${styles.inlineCta}`}>
          Send one task →
        </a>
      </div>

      <div className={styles.thread}>
        <div className={styles.fromYou}>Can we offer tokenised stocks by Q4?</div>

        <div className={styles.reply}>
          <span
            className={styles.avatar}
            style={{ background: "var(--blue-deep)", color: "var(--blue)" }}
          >
            G
          </span>
          <div className={styles.bubble}>
            Yes — coverage note by Friday, portfolio manager scoped next week, rails after. Cathena
            shipped on this exact path.
          </div>
        </div>

        <div className={styles.reply}>
          <span
            className={styles.avatar}
            style={{ background: "var(--green-deep)", color: "var(--green)" }}
          >
            A
          </span>
          <div className={styles.bubble}>
            Stack reserved. Frontend + backend from one desk.
          </div>
        </div>

        <div className={styles.typing}>
          <i />
          <i />
          <i />
          Mira is typing…
        </div>
      </div>
    </section>
  );
}

export default function Hero({ variant }: { variant: HeroVariant }) {
  if (variant === "A") return <HeroA />;
  if (variant === "C") return <HeroC />;
  return <HeroB />;
}

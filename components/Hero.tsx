import { heroA, heroB, heroC, heroD, type HeroVariant } from "@/lib/content";
import HeroStrips from "./HeroStrips";
import styles from "./Hero.module.css";

function HeroA() {
  const { card } = heroA;

  return (
    <section className={styles.split}>
      <div className={styles.copyIn}>
        <div className={styles.status}>
          <span className={styles.pulse} />
          {heroA.status}
        </div>
        <h1 className={styles.title}>
          {heroA.title}
          <br />
          <em>{heroA.titleEm}</em>
        </h1>
        <p className={styles.lede}>{heroA.lede}</p>
        <div className={styles.actions}>
          <a href={heroA.primary.href} className={styles.primaryLoud}>
            {heroA.primary.label}
          </a>
          <a href={heroA.secondary.href} className={styles.secondaryLoud}>
            {heroA.secondary.label}
          </a>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHead}>
          <span className={styles.label}>{card.label}</span>
          <span className={styles.delta}>{card.delta}</span>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.donut}>
            <div className={styles.donutHole}>
              <span className={styles.donutValue}>{card.total}</span>
              <span className={styles.donutCaption}>{card.totalCaption}</span>
            </div>
          </div>

          <div className={styles.legend}>
            {card.allocation.map((row) => (
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
          <svg viewBox="0 0 560 36" preserveAspectRatio="none" role="img" aria-label={card.rail.alt}>
            <text x="0" y="24" fill="var(--muted-strong)" fontSize="10" fontFamily="var(--font-mono), monospace">
              {card.rail.from}
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
              {card.rail.via}
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
              {card.rail.to}
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
        {heroB.badge}
      </div>
      <h1 className={styles.title}>
        {heroB.title}
        <br />
        <em>{heroB.titleEm}</em>
      </h1>
      <p className={styles.lede}>{heroB.lede}</p>
      <div className={styles.actions}>
        <a href={heroB.primary.href} className={styles.primary}>
          {heroB.primary.label}
        </a>
        <a href={heroB.secondary.href} className={styles.secondary}>
          {heroB.secondary.label}
        </a>
      </div>
    </section>
  );
}

function HeroC() {
  const { thread } = heroC;

  return (
    <section className={styles.split}>
      <div>
        <div className={styles.status}>
          <span className={styles.pulse} />
          {heroC.status}
        </div>
        <h1 className={styles.title}>
          {heroC.title}
          <br />
          <em>{heroC.titleEm}</em>
        </h1>
        <p className={styles.lede}>{heroC.lede}</p>
        <a href={heroC.cta.href} className={`${styles.primary} ${styles.inlineCta}`}>
          {heroC.cta.label}
        </a>
      </div>

      <div className={styles.thread}>
        <div className={styles.fromYou}>{thread.fromYou}</div>

        {thread.replies.map((reply) => (
          <div key={reply.initial} className={styles.reply}>
            <span
              className={styles.avatar}
              style={{ background: reply.tint, color: reply.accent }}
            >
              {reply.initial}
            </span>
            <div className={styles.bubble}>{reply.text}</div>
          </div>
        ))}

        <div className={styles.typing}>
          <i />
          <i />
          <i />
          {thread.typing}
        </div>
      </div>
    </section>
  );
}

function HeroD() {
  return (
    <section className={styles.strips}>
      <div className={styles.stripIntro}>
        <div>
          <h1 className={styles.stripTitle}>
            {heroD.title}
            <br />
            {heroD.titleSecondLine}
          </h1>
          <div className={styles.stripActions}>
            <a href={heroD.primary.href} className={styles.stripPrimary}>
              {heroD.primary.label}
            </a>
            <a href={heroD.secondary.href} className={styles.stripSecondary}>
              {heroD.secondary.label}
            </a>
          </div>
        </div>
        <p className={styles.stripLede}>{heroD.lede}</p>
      </div>

      <HeroStrips />
    </section>
  );
}

export default function Hero({ variant }: { variant: HeroVariant }) {
  if (variant === "A") return <HeroA />;
  if (variant === "B") return <HeroB />;
  if (variant === "C") return <HeroC />;
  return <HeroD />;
}

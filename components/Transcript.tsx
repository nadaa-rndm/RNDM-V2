import { transcript } from "@/lib/content";
import { Section } from "./Section";
import styles from "./Transcript.module.css";

type Speaker = {
  initial: string;
  accent: string;
  tint: string;
  text: string;
  stamp: string;
};

function Message({ speaker }: { speaker: Speaker }) {
  return (
    <div
      className={styles.message}
      style={
        {
          "--accent": speaker.accent,
          "--accent-tint": speaker.tint,
        } as React.CSSProperties
      }
    >
      <span className={styles.avatar}>{speaker.initial}</span>
      <div className={styles.body}>
        <div className={styles.bubble}>{speaker.text}</div>
        <span className={styles.stamp}>{speaker.stamp}</span>
      </div>
    </div>
  );
}

export default function Transcript() {
  const { attachment, terminal, storyboard } = transcript;

  return (
    <Section id="transcript" sunken>
      <div className={styles.thread}>
        <div className={styles.head}>
          <h2 className={styles.title}>{transcript.title}</h2>
          <span className={styles.eyebrow}>{transcript.eyebrow}</span>
        </div>

        <div className={styles.fromYou}>
          <div className={styles.bubble}>{transcript.fromYou.text}</div>
          <span className={styles.stamp}>{transcript.fromYou.stamp}</span>
        </div>

        <Message speaker={transcript.ganesh} />

        <div className={styles.attachment}>
          <div className={styles.attachmentHead}>
            <span className={styles.attachmentTitle}>{attachment.title}</span>
            <span className={styles.attachmentFile}>{attachment.file}</span>
          </div>
          <div className={styles.rows}>
            {attachment.rows.map((row) => (
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

        <Message speaker={transcript.adam} />

        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <i style={{ background: "var(--red)" }} />
            <i style={{ background: "var(--amber)" }} />
            <i style={{ background: "var(--green)" }} />
            <span className={styles.terminalName}>{terminal.name}</span>
          </div>
          <div className={styles.log}>
            {terminal.lines.map((line) => (
              <div key={line.text}>
                <span style={{ color: line.color }}>{line.mark}</span> {line.text}
                {line.caret && <span className={styles.caret}> ▍</span>}
              </div>
            ))}
          </div>
        </div>

        <Message speaker={transcript.mira} />

        <div className={styles.storyboard}>
          <div className={`${styles.frame} ${styles.frameQuote}`}>{storyboard.quote}</div>
          <div className={`${styles.frame} ${styles.frameBars}`}>
            {storyboard.bars.map((bar) => (
              <span key={bar.width} style={{ width: bar.width, background: bar.color }} />
            ))}
          </div>
          <div className={`${styles.frame} ${styles.framePlay}`}>
            <span />
          </div>
          <div className={`${styles.frame} ${styles.frameLaunch}`}>{storyboard.launch}</div>
        </div>
      </div>
    </Section>
  );
}

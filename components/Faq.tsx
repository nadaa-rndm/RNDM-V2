import { faq } from "@/lib/content";
import { Section } from "./Section";
import styles from "./Faq.module.css";

export default function Faq() {
  return (
    <Section id="faq" sunken>
      <div className={styles.layout}>
        <h2 className={styles.title}>{faq.title}</h2>

        <div className={styles.list}>
          {faq.questions.map((item) => (
            <div key={item.q} className={styles.item}>
              <span className={styles.question}>{item.q}</span>
              <p className={styles.answer}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

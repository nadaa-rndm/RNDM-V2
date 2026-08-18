import { Section } from "./Section";
import styles from "./Faq.module.css";

const QUESTIONS = [
  {
    q: "Who signs off on a trade?",
    a: "Always a human. Agents propose, size and document; approval stays with your desk.",
  },
  {
    q: "Do you hold custody?",
    a: "No. We build against your custodian and your banking rails — never in the middle of them.",
  },
  {
    q: "What happens after launch?",
    a: "We run it — monitoring, evals, model changes and incident response on a monthly review.",
  },
  {
    q: "Can we see it working first?",
    a: "Cathena and Dudu are live from Ganesh's desk — start there, then send one task.",
  },
];

export default function Faq() {
  return (
    <Section id="faq" sunken>
      <div className={styles.layout}>
        <h2 className={styles.title}>Questions finance teams ask us</h2>

        <div className={styles.list}>
          {QUESTIONS.map((item) => (
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

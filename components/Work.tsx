import Image from "next/image";
import { work } from "@/lib/content";
import { Section, SectionHead, Shell, sectionStyles } from "./Section";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <Section id="work">
      <Shell>
        <SectionHead title={work.title} eyebrow={work.eyebrow} />

        <div className={`${sectionStyles.grid} ${sectionStyles.cols2}`}>
          {work.projects.map((project) => (
            <a
              key={project.id}
              id={project.id}
              href={project.href}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener" : undefined}
              className={styles.card}
              style={{ "--accent": project.accent } as React.CSSProperties}
            >
              <div
                className={`${styles.cover} ${project.image ? styles.onImage : ""}`}
                style={{ background: project.cover }}
              >
                {project.image && (
                  <>
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 580px"
                      className={styles.coverArt}
                    />
                    <span className={styles.scrim} />
                  </>
                )}

                <span className={styles.coverEyebrow}>{project.eyebrow}</span>
                <span className={styles.coverName}>{project.name}</span>
                <span className={styles.coverBadge} style={{ background: project.badge }}>
                  {project.stat}
                </span>
              </div>

              <div className={styles.meta}>
                <span className={styles.blurb}>{project.blurb}</span>
                <span className={styles.link}>{project.link}</span>
              </div>
            </a>
          ))}
        </div>
      </Shell>
    </Section>
  );
}

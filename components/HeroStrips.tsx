"use client";

import Image from "next/image";
import { useState } from "react";
import { heroD } from "@/lib/content";
import styles from "./Hero.module.css";

export default function HeroStrips() {
  const [open, setOpen] = useState(0);

  return (
    <div className={styles.stripRow}>
      {heroD.strips.map((agent, index) => {
        const isOpen = index === open;
        return (
          <button
            key={agent.id}
            type="button"
            aria-expanded={isOpen}
            aria-label={agent.name}
            onClick={() => setOpen(index)}
            className={`${styles.strip} ${isOpen ? styles.open : ""}`}
            style={{ "--tint": agent.tint } as React.CSSProperties}
          >
            <Image
              src={agent.image}
              alt=""
              fill
              priority={index === 0}
              sizes="(max-width: 760px) 100vw, 55vw"
              className={styles.stripImage}
            />
            <span className={styles.stripScrim} />

            {isOpen && (
              <>
                <span className={styles.stripLabel}>
                  <span className={styles.stripName}>{agent.name}</span>
                  <span className={styles.stripRole}>{agent.role}</span>
                </span>
                <span className={styles.stripChat}>
                  <span className={styles.stripSaid}>{agent.said}</span>
                  <span className={styles.stripReply}>{agent.reply}</span>
                </span>
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}

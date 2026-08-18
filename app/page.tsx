import Compose from "@/components/Compose";
import Desk from "@/components/Desk";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Market from "@/components/Market";
import Onboarding from "@/components/Onboarding";
import Transcript from "@/components/Transcript";
import Work from "@/components/Work";
import { HERO_VARIANT } from "@/lib/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero variant={HERO_VARIANT} />
      <Desk />
      <Transcript />
      <Work />
      <Market />
      <Onboarding />
      <Faq />
      <Compose />
      <Footer />
    </div>
  );
}

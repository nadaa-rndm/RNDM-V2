/**
 * The source design shipped three hero treatments behind an enum prop.
 * Switch the variant here to change which one renders.
 */
export type HeroVariant = "A" | "B" | "C";

export const HERO_VARIANT: HeroVariant = "B";

export const CONTACT_EMAIL = "hello@rndm.io";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=One task for the desk`;

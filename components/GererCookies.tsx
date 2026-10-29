"use client";

import { EVENEMENT_GERER } from "./Cookies";

// Lien du pied de page qui rouvre le bandeau de consentement.
export default function GererCookies() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(EVENEMENT_GERER))}
      className="underline underline-offset-4 hover:text-white transition-colors"
    >
      Gérer les cookies
    </button>
  );
}

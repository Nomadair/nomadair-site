// Choix du visiteur sur les cookies de mesure d'audience (Google Analytics).
export type Choix = "accepte" | "refuse";

type Stockage = Pick<Storage, "getItem" | "setItem">;

export const CLE_CONSENTEMENT = "nomadair-consentement";
export const DUREE_MOIS = 6;

export function lireConsentement(stockage: Stockage, maintenant: Date): Choix | null {
  const brut = stockage.getItem(CLE_CONSENTEMENT);
  if (!brut) return null;
  let lu: { choix?: unknown; date?: unknown };
  try {
    lu = JSON.parse(brut);
  } catch {
    return null;
  }
  const { choix, date } = lu;
  if (choix !== "accepte" && choix !== "refuse") return null;
  const expiration = new Date(String(date));
  if (Number.isNaN(expiration.getTime())) return null;
  expiration.setMonth(expiration.getMonth() + DUREE_MOIS);
  if (maintenant >= expiration) return null;
  return choix;
}

export function enregistrerConsentement(stockage: Stockage, choix: Choix, maintenant: Date): void {
  stockage.setItem(CLE_CONSENTEMENT, JSON.stringify({ choix, date: maintenant.toISOString() }));
}

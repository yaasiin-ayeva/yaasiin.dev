export const ga_measurement_id = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID

// Déclaration de la propriété gtag sur l'objet window
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Log des vues de page
export const pageview = (url: string) => {
  window.gtag('config', ga_measurement_id, {
    page_path: url,
  });
};

// Log des événements spécifiques
export const event = ({ action, params }: any) => {
  window.gtag('event', action, params);
};
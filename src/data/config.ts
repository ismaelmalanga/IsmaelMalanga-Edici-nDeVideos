// ============================================================
// CONFIGURACIÓN PRINCIPAL — editá aquí sin tocar el código
// ============================================================

export const SITE = {
  name: "Ismael Malanga",
  title: "Editor de Reels, TikToks & Shorts",
  description: "Edito videos cortos para Instagram y TikTok. Resultados que hacen parar el scroll.",
  url: "https://tunombre.com", // <-- REEMPLAZAR
};

export const CONTACT = {
  whatsapp: "+5493804367406",
  whatsappMessage: "Holaa! Quiero contratar tu servicio de edición",
  TikTok: "@ismaelmalanga.editor",       // <-- REEMPLAZAR
  TikTokUrl: "https://www.tiktok.com/@ismaelmalanga.editor", // <-- REEMPLAZAR
};

export const WA_URL = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

export const VIDEOS = [

  {
    id: 1,
    src: "https://res.cloudinary.com/rryj6c1f/video/upload/v1789709747/Ismael_Malanga_Editor_de_Videos_2026.mp4",
    poster: "https://res.cloudinary.com/rryj6c1f/image/upload/v1789709946/Editor_Ismael_Malanga.png",
    title: "Edición dinámica."
    ,
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/rryj6c1f/video/upload/v1789710781/KEVIN_SUB.mp4",
    poster: "https://res.cloudinary.com/rryj6c1f/image/upload/v1789710719/b83f90ee-3591-4aa4-8318-d72a60f6a40f.png",
    title: "Edición dinámica (B-Roll básico).",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/rryj6c1f/video/upload/v1787712752/cabecines.mp4",
    poster: "https://res.cloudinary.com/rryj6c1f/image/upload/v1787712797/portada_cabecines.png",
    title: "Edicíon personalizada al ritmo de la música.",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/rryj6c1f/video/upload/v1789711094/Al_SAMA_RESUMEN_25_A%C3%91OS.mp4",
    poster: "https://res.cloudinary.com/rryj6c1f/image/upload/v1789711147/IMG_1032.jpg",
    title: "Edición personalizada al ritmo de la música.",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/rryj6c1f/video/upload/v1789711825/Villa_Union.mp4",
    poster: "https://res.cloudinary.com/rryj6c1f/image/upload/v1789712063/villa_2.png",
    title: "Edición dinámica y personalizada al ritmo de la música.",
  },
];

export const HERO_VIDEO = {
  src: "https://res.cloudinary.com/rryj6c1f/video/upload/v1790129357/completo.mp4",
  poster: "https://res.cloudinary.com/rryj6c1f/image/upload/v1790114276/temp_2.png",
};
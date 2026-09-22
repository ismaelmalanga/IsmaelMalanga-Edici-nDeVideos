const UPLOAD = "/upload/";

function injectTransform(url: string, transform: string): string {
  if (!url.includes("res.cloudinary.com") || !url.includes(UPLOAD)) return url;
  if (url.includes(UPLOAD + transform + "/")) return url;
  return url.replace(UPLOAD, `${UPLOAD}${transform}/`);
}

/** Preview in the phone frame (~300px desktop). No audio — videos are muted. */
export const VIDEO_PREVIEW =
  "f_mp4,vc_h264,q_auto:eco,w_480,c_limit,ac_none,br_500k";

/** Preview on small screens (~240px frame). */
export const VIDEO_PREVIEW_MOBILE =
  "f_mp4,vc_h264,q_auto:eco,w_360,c_limit,ac_none,br_350k";

/** Lightbox / fullscreen — keep audio, still capped. */
export const VIDEO_FULL = "f_mp4,vc_h264,q_auto,w_720,c_limit,br_1200k";

export const POSTER_WIDTHS = [240, 360, 540] as const;
export const POSTER_SIZES_HERO = "(max-width: 768px) 240px, 300px";
export const POSTER_SIZES_CAROUSEL =
  "(max-width: 600px) 48vw, min(22vw, 260px)";

function posterTransform(width: number): string {
  return `f_auto,q_auto:eco,w_${width},c_limit`;
}

export const POSTER_TRANSFORM = posterTransform(360);

export function cldVideo(url: string, transform = VIDEO_PREVIEW): string {
  return injectTransform(url, transform);
}

export function cldImage(url: string, width = 360): string {
  return injectTransform(url, posterTransform(width));
}

export function cldImageSrcset(url: string): string {
  return POSTER_WIDTHS.map((w) => `${cldImage(url, w)} ${w}w`).join(", ");
}

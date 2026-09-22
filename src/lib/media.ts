const UPLOAD = "/upload/";

function injectTransform(url: string, transform: string): string {
  if (!url.includes("res.cloudinary.com") || !url.includes(UPLOAD)) return url;
  if (url.includes(UPLOAD + transform + "/")) return url;
  return url.replace(UPLOAD, `${UPLOAD}${transform}/`);
}

/** Preview in the phone frame (~300px). No audio — videos are muted. */
export const VIDEO_PREVIEW =
  "f_mp4,vc_h264,q_auto:eco,w_480,c_limit,ac_none,br_500k";

/** Lightbox / fullscreen — keep audio, still capped. */
export const VIDEO_FULL = "f_mp4,vc_h264,q_auto,w_720,c_limit,br_1200k";

export const POSTER_TRANSFORM = "f_auto,q_auto:eco,w_540,c_limit";

export function cldVideo(url: string, transform = VIDEO_PREVIEW): string {
  return injectTransform(url, transform);
}

export function cldImage(url: string, transform = POSTER_TRANSFORM): string {
  return injectTransform(url, transform);
}

export function generateImageUrl(url: string | null) {
  if (url == null) {
    return "https://res.cloudinary.com/dkmk9tdwx/image/upload/v1653801236/4_nvgvpn.png";
  }
  url = url.slice(2, url.length);
  url = url.replace("t_thumb", "t_cover_big");
  return `https://${url}`;
}

export function generateScreenshotUrl(url: string | null) {
  if (url == null) {
    return "https://res.cloudinary.com/dkmk9tdwx/image/upload/v1653801236/4_nvgvpn.png";
  }
  url = url.slice(2, url.length);
  url = url.replace("t_thumb", "t_720p");
  return `https://${url}`;
}
//

//images.igdb.com/igdb/image/upload/t_thumb/rs994ijjmpv0gnmk09ao.jpg

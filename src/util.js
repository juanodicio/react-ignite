
export const smallImage = (imagePath, size) => {
  const image = imagePath.match(/media\/screeshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
    )
    : imagePath.replace(
        "/media/games",
        `/media/resize/${size}/-/games/`
    );
  return image;
}
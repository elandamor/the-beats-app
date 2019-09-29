/**
 * Preload an image
 * @param {url} URL - The url of the image to preload
 */
const preloadImage = (url: string) => {
  return new Promise(function(resolve) {
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = null;
  });
};

export default preloadImage;

import preloadImage from './preloadImage';

export function updateSessionStorage(src: string) {
  const cachedImages = JSON.parse(
    window.sessionStorage.getItem('__TRA_IMG__') || '{}',
  );
  cachedImages[src] = +new Date();
  window.sessionStorage.setItem('__TRA_IMG__', JSON.stringify(cachedImages));
}

/**
 * Check browser support for IntersectionObserver(IO)
 * @return {boolean} true or false - True if browser supports IO
 */
function SUPPORTS_INTERSECTION_OBSERVER() {
  return 'IntersectionObserver' in window;
}
/**
 * Get css-class to set on image once it has been handled by IO
 * @return {string} css-class - The css class attached to a handled image
 */
function HANDLED_CLASS() {
  return 'lazy-image-handled';
}
/**
 * Get css-class to set on image once it has been loaded by preloader
 * @return {string} css-class - The css class attached to a loaded image
 */
function LOADED_CLASS() {
  return 'lazy-image-loaded';
}

/**
 * Add the respective image to the DOM
 */
function _applyImage(img: any, src: string) {
  const el = img;

  el.classList.add(LOADED_CLASS());

  if (!el) {
    return;
  }
  // If target element is an image ...
  if (el.tagName.toLowerCase() === 'img') {
    // ... set src attribute of element ...
    el.src = src;
  } else {
    // ... otherwise set image source as background of element.
    el.style.backgroundImage = `url(${src})`;
  }

  updateSessionStorage(src);
}
/**
 * Preload the respective image
 * @param {element} img - The image to be loaded
 * @return {callback} _applyImage - A method that adds the image to the DOM
 */
function _preloadImage(image: any) {
  // Get the source for the image.
  const src = image.dataset.src;
  // Do nothing if image source is missing.
  if (!src) {
    return;
  }

  return preloadImage(src).then(() => _applyImage(image, src));
}

/**
 * Class to lazyload images
 */
export default function IOLazyImageLoader(image: any) {
  // Load image immediately if IO is not supported
  if (SUPPORTS_INTERSECTION_OBSERVER) {
    _preloadImage(image);
    return;
  }
  // Setup IO
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(HANDLED_CLASS());

        _preloadImage(entry.target);

        observer.unobserve(entry.target);
      }
    });
  });
  // ... observe image
  io.observe(image);
}

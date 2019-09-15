import React, { FC, useEffect, useRef, useState } from 'react';
import { StyledSystemProps } from 'styled-system';
// Styles
import Wrapper from './styles';

import IOImageLazyLoader from '@app/utils/IOImageLazyLoader';

export interface IImageProps extends StyledSystemProps {
  aspect?: string;
  className?: string;
  src: string;
}

/**
 * @render react
 * @name Img component
 * @description Image component.
 * @example
 *    <Image
 *      src="./image.png"
 *    />
 */

const Image: FC<IImageProps> = ({ className, src, ...rest }) => {
  const [isDocumentLoad, setDocumentLoaded] = useState(false);
  const [isCached, setIsCached] = useState(false);
  const cachedImagesRefString = window.sessionStorage.getItem('__TRA_IMG__');
  const imgEl = useRef(null);

  const triggerImageLoadOrObserver = () => {
    IOImageLazyLoader(imgEl.current);
  };

  useEffect(() => {
    if (imgEl.current) {
      if (cachedImagesRefString) {
        try {
          const cachedImagesRef = JSON.parse(cachedImagesRefString);

          if (cachedImagesRef[src]) {
            setIsCached(true);
          }
        } catch (e) {
          console.error(`JSON parsing is broken ${e}`);
        }
      }

      if (document.readyState === 'complete') {
        triggerImageLoadOrObserver();
      } else {
        window.addEventListener('load', () => setDocumentLoaded(true));
      }
    }

    return () => {
      window.removeEventListener('load', () => setDocumentLoaded(false));
    };
  }, []);

  useEffect(() => {
    triggerImageLoadOrObserver();
  }, [isDocumentLoad]);

  return (
    <Wrapper isCached={isCached} {...rest}>
      <img ref={imgEl} data-src={src} />
    </Wrapper>
  );
};

Image.defaultProps = {
  aspect: '1/1',
};

export default Image;

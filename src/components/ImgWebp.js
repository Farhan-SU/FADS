import React from 'react';

/*Credits to Josh Comeau for this abstraction. */
/*https://joshwcomeau.com/performance/embracing-modern-image-formats/ */

const ImgWepb = ({
    className,
    src,
    fallback,
    type = 'image/webp',
    typeFallBack = 'image/png',
    ...delegated
  }) => {
    return (
      <picture>
        <source srcSet={src} type={type} />
        <img src={fallback} {...delegated} className={className} type={typeFallBack} alt=""/>
      </picture>
    );
  };

  export default ImgWepb;
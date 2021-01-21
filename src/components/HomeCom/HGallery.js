import React from 'react';
import GalleryMobile from './GalleryMobile';
import GalleryDesktop from './GalleryDesktop';
import { useMediaQuery } from 'react-responsive'

export default function HGallery ()  {  

  const isMobile = useMediaQuery({ maxWidth: 495});
  const isDesktop = useMediaQuery({minWidth: 852});
  const isTablet = useMediaQuery({ minWidth: 550, maxWidth: 850 });

  return(
    <>
    {isDesktop && <GalleryDesktop/>}
    {isMobile && <GalleryMobile/>}
    {isTablet && <GalleryDesktop/>}
    </>
  )
};
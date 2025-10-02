import mobileHeader from "/images/mobile/image-header.jpg";
import mobileTransform from "/images/mobile/image-transform.jpg";
import mobileStandOut from "/images/mobile/image-stand-out.jpg";
import mobileGraphicDesign from "/images/mobile/image-graphic-design.jpg";
import mobilePhotography from "/images/mobile/image-photography.jpg";
import mobileGalleryMilkbottles from "/images/mobile/image-gallery-milkbottles.jpg";
import mobileGalleryOrange from "/images/mobile/image-gallery-orange.jpg";
import mobileGalleryCone from "/images/mobile/image-gallery-cone.jpg";
import mobileGallerySugarcubes from "/images/mobile/image-gallery-sugar-cubes.jpg";

import desktopHeader from "/images/desktop/image-header.jpg";
import desktopTransform from "/images/desktop/image-transform.jpg";
import desktopStandOut from "/images/desktop/image-stand-out.jpg";
import desktopGraphicDesign from "/images/desktop/image-graphic-design.jpg";
import desktopPhotography from "/images/desktop/image-photography.jpg";
import desktopGalleryMilkbottles from "/images/desktop/image-gallery-milkbottles.jpg";
import desktopGalleryOrange from "/images/desktop/image-gallery-orange.jpg";
import desktopGalleryCone from "/images/desktop/image-gallery-cone.jpg";
import desktopGallerySugarcubes from "/images/desktop/image-gallery-sugarcubes.jpg";

type PictureProps = {
  picture:
    | "header"
    | "transform"
    | "stand-out"
    | "graphic-design"
    | "photography"
    | "gallery-milkbottles"
    | "gallery-orange"
    | "gallery-cone"
    | "gallery-sugarcubes";
  alt?: string;
};

export default function Picture({ picture, alt = "" }: PictureProps) {
  let [srcMobile, srcDesktop] = ["", ""];

  switch (picture) {
    case "header":
      [srcMobile, srcDesktop] = [mobileHeader, desktopHeader];
      break;
    case "transform":
      [srcMobile, srcDesktop] = [mobileTransform, desktopTransform];
      break;
    case "stand-out":
      [srcMobile, srcDesktop] = [mobileStandOut, desktopStandOut];
      break;
    case "graphic-design":
      [srcMobile, srcDesktop] = [mobileGraphicDesign, desktopGraphicDesign];
      break;
    case "photography":
      [srcMobile, srcDesktop] = [mobilePhotography, desktopPhotography];
      break;
    case "gallery-milkbottles":
      [srcMobile, srcDesktop] = [
        mobileGalleryMilkbottles,
        desktopGalleryMilkbottles,
      ];
      break;
    case "gallery-orange":
      [srcMobile, srcDesktop] = [mobileGalleryOrange, desktopGalleryOrange];
      break;
    case "gallery-cone":
      [srcMobile, srcDesktop] = [mobileGalleryCone, desktopGalleryCone];
      break;
    case "gallery-sugarcubes":
      [srcMobile, srcDesktop] = [
        mobileGallerySugarcubes,
        desktopGallerySugarcubes,
      ];
      break;
  }

  return (
    <picture>
      <source srcSet={srcDesktop} media={`(min-width: 768px)`} />
      <img src={srcMobile} alt={alt} />
    </picture>
  );
}

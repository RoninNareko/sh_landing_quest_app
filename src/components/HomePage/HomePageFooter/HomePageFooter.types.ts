import { StaticImageData } from "next/image";

export interface FooterLinksTypes {
  id: number;
  href: string;
  text: string;
}

export interface FooterSocialLinksTypes {
  id: number;
  href: string;
  image: string | StaticImageData;
}

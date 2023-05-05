import { FooterLinksTypes, FooterSocialLinksTypes } from "./Footer.types";
import fb from "@/assets/images/social/facebook.svg";
import lisa from "@/assets/images/social/lisa.svg";
import tw from "@/assets/images/social/twit.svg";
import linked from "@/assets/images/social/linkdin.svg";

export const IMG_ALT = "err";

export const footerLinks: FooterLinksTypes[] = [
  {
    id: 1,
    href: "/",
    text: "About Us",
  },
  {
    id: 2,
    href: "/",
    text: "Steps",
  },
  {
    id: 3,
    href: "/",
    text: "FAQs",
  },
  {
    id: 4,
    href: "/",
    text: "Teams",
  },
  {
    id: 5,
    href: "/",
    text: "Contact Us",
  },
];

export const footerSocialLinks: FooterSocialLinksTypes[] = [
  {
    id: 1,
    href: "/",
    image: fb,
  },
  {
    id: 2,
    href: "/",
    image: lisa,
  },
  {
    id: 3,
    href: "/",
    image: tw,
  },
  {
    id: 4,
    href: "/",
    image: linked,
  },
];

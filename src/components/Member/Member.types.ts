import { StaticImageData } from "next/image";

export interface MemberProps {
  bottom?: boolean;
  name: string;
  description: string;
  image: string | StaticImageData;
}

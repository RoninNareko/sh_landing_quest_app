import { StaticImageData } from "next/image";

export type MembersType = {
  id: number;
  name: string;
  description: string;
  image: string | StaticImageData;
};

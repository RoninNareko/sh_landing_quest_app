import { StaticImageData } from "next/image";

export interface TechnologyType {
  id?: number;
  name: string;
  image: string | StaticImageData;
}

import { LinePropsTypes } from "@/components/HomePage/AboutUs/Line/Line.types";

export default function Line({ className, backgroundImage }: LinePropsTypes) {
  return <i className={className} style={backgroundImage}></i>;
}

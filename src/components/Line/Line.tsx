import { LinePropsTypes } from "@/components/Line/Line.types";

export default function Line({ className, backgroundImage }: LinePropsTypes) {
  return <i className={className} style={backgroundImage}></i>;
}

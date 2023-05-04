import { UseFormRegister } from "react-hook-form";
import { validationSchema } from "@/components/HomePage/HomePageContactUs/ContactForm/ContactForm.validation";

export interface InputSettingsType {
  id?: number;
  placeholder: string;
  register: UseFormRegister<validationSchema>;
  entityName: string;
  errorValidation: any;
}

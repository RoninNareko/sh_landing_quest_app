import { UseFormRegister } from "react-hook-form";
import { FormDataType } from "@/components/ContactUs/ContactForm/ContactForm.types";

export interface InputSettingsType {
  id?: number;
  placeholder: string;
  register: UseFormRegister<FormDataType>;
  entityName: "name" | "phone" | "email";
  errorValidation: any;
}

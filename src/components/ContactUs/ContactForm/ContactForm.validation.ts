import * as yup from "yup";
import { PHONE_INPUT_ERROR_MESSAGE } from "@/components/ContactUs/ContactForm/ContactForm.constants";

export const validationSchema = yup.object({
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      PHONE_INPUT_ERROR_MESSAGE
    ),
  name: yup.string().required(),
  email: yup.string().email().required(),
});

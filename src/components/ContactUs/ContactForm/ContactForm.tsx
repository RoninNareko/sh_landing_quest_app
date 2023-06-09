import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import styles from "./ContactForm.module.scss";
import CustomButton from "@/common/CustomButton/CustomButton";
import {
  buttonText,
  buttonType,
  EMAIL_ENTITY_NAME,
  EMAIL_INPUT_PLACEHOLDER,
  FEEDBACK_API_URL,
  FORM_MODE,
  NAME_ENTITY_NAME,
  NAME_INPUT_PLACEHOLDER,
  PHONE_ENTITY_NAME,
  PHONE_INPUT_PLACEHOLDER,
} from "@/components/ContactUs/ContactForm/ContactForm.constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/components/ContactUs/ContactForm/ContactForm.validation";
import CustomInput from "@/components/ContactUs/ContactForm/CustomInput/CustomInput";
import axios from "axios";
import { FormDataType } from "@/components/ContactUs/ContactForm/ContactForm.types";
import { InputSettingsType } from "@/components/ContactUs/ContactForm/CustomInput/CustomInput.types";

export default function App() {
  const cx = classNames.bind(styles);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    mode: FORM_MODE,
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = async (data: FormDataType) => {
    try {
      const res = await axios.post(FEEDBACK_API_URL, { data });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const isErrors = Object.keys(errors).length !== 0;

  const inputs: InputSettingsType[] = [
    {
      id: 1,
      placeholder: NAME_INPUT_PLACEHOLDER,
      register,
      entityName: NAME_ENTITY_NAME,
      errorValidation: errors?.name,
    },
    {
      id: 2,
      placeholder: PHONE_INPUT_PLACEHOLDER,
      register,
      entityName: PHONE_ENTITY_NAME,
      errorValidation: errors?.phone,
    },
    {
      id: 3,
      placeholder: EMAIL_INPUT_PLACEHOLDER,
      register,
      entityName: EMAIL_ENTITY_NAME,
      errorValidation: errors?.email,
    },
  ];

  return (
    <section className={cx(styles.formContainer)}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {inputs.map(
          ({
            id,
            placeholder,
            register,
            errorValidation,
            entityName,
          }: InputSettingsType) => {
            return (
              <CustomInput
                key={id}
                placeholder={placeholder}
                errorValidation={errorValidation}
                entityName={entityName}
                register={register}
              />
            );
          }
        )}

        <CustomButton
          disabled={isErrors}
          type={buttonType}
          value={buttonText}
        />
      </form>
    </section>
  );
}

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
  FORM_MODE,
  NAME_ENTITY_NAME,
  NAME_INPUT_PLACEHOLDER,
  PHONE_ENTITY_NAME,
  PHONE_INPUT_PLACEHOLDER,
} from "@/components/HomePage/HomePageContactUs/ContactForm/ContactForm.constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/components/HomePage/HomePageContactUs/ContactForm/ContactForm.validation";
import { InputSettingsType } from "@/components/HomePage/HomePageContactUs/ContactForm/CustomInput/CustomInput.types.TS";
import CustomInput from "@/components/HomePage/HomePageContactUs/ContactForm/CustomInput/CustomInput";
import axios, { AxiosResponse } from "axios";
import { FromDataType } from "@/components/HomePage/HomePageContactUs/ContactForm/ContactForm.types";

export default function App() {
  const cx = classNames.bind(styles);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: FORM_MODE,
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = (data: FromDataType) => {
    const url = "http://localhost:3004/feedback";

    const reqBody = { data };

    axios
      .post(url, reqBody)
      .then(function (response: AxiosResponse) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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

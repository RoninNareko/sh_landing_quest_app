import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import styles from "./ContactForm.module.scss";
import * as yup from "yup";
import CustomButton from "@/components/common/CustomButton/CustomButton";
import {
  buttonText,
  buttonType,
  EMAIL_ENTITY_NAME,
  EMAIL_INPUT_PLACEHOLDER,
  FORM_MODE,
  NAME_ENTITY_NAME,
  NAME_INPUT_PLACEHOLDER,
  PHONE_ENTITY_NAME,
  PHONE_INPUT_ERROR_MESSAGE,
  PHONE_INPUT_PLACEHOLDER,
} from "@/components/HomePage/HomePageContactUs/ContactForm/ContactForm.constants";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      PHONE_INPUT_ERROR_MESSAGE
    ),
  name: yup.string().required(),
  email: yup.string().email().required(),
});

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
  const onSubmitHandler = (data) => {
    console.log({ data });
  };
  const isErrors = Object.keys(errors).length !== 0;
  return (
    <section className={cx(styles.formContainer)}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div
          className={cx(styles.contactFormContainer, {
            [styles.contactFormContainerError]: errors.name,
          })}
        >
          <input
            className={cx(styles.contctFmInput, {
              [styles.contactFmInputError]: errors.name,
            })}
            placeholder={NAME_INPUT_PLACEHOLDER}
            {...register(NAME_ENTITY_NAME)}
          />
        </div>

        <p
          className={cx({
            [styles.errorMessage]: errors.name?.message,
          })}
        >
          {errors.name?.message}
        </p>

        <div
          className={cx(styles.contactFormContainer, {
            [styles.contactFormContainerError]: errors.phone,
          })}
        >
          <input
            className={cx(styles.contctFmInput, {
              [styles.contactFmInputError]: errors.phone,
            })}
            placeholder={PHONE_INPUT_PLACEHOLDER}
            {...register(PHONE_ENTITY_NAME)}
          />
        </div>

        <p
          className={cx({
            [styles.errorMessage]: errors.phone?.message,
          })}
        >
          {errors.phone?.message}
        </p>

        <div
          className={cx(styles.contactFormContainer, {
            [styles.contactFormContainerError]: errors.email,
          })}
        >
          <input
            className={cx(styles.contctFmInput, {
              [styles.contactFmInputError]: errors.email,
            })}
            placeholder={EMAIL_INPUT_PLACEHOLDER}
            {...register(EMAIL_ENTITY_NAME)}
          />
        </div>

        <p
          className={cx({
            [styles.errorMessage]: errors.email?.message,
          })}
        >
          {errors.email?.message}
        </p>

        <CustomButton
          disabled={isErrors}
          type={buttonType}
          value={buttonText}
        />
      </form>
    </section>
  );
}

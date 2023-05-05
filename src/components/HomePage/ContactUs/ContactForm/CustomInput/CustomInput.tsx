import styles from "./CustomInput.module.scss";
import React from "react";
import classNames from "classnames";
import { InputSettingsType } from "@/components/HomePage/ContactUs/ContactForm/CustomInput/CustomInput.types";

export default function CustomInput({
  errorValidation,
  entityName,
  register,
  placeholder,
}: InputSettingsType) {
  const cx = classNames.bind(styles);
  return (
    <>
      <div
        className={cx(styles.contactFormContainer, {
          [styles.contactFormContainerError]: errorValidation,
        })}
      >
        <input
          className={cx(styles.contctFmInput, {
            [styles.contactFmInputError]: errorValidation,
          })}
          placeholder={placeholder}
          {...register(entityName)}
        />
      </div>
      <p
        className={cx({
          [styles.errorMessage]: errorValidation?.message,
        })}
      >
        {!!errorValidation && `${errorValidation?.message}`}
      </p>
    </>
  );
}

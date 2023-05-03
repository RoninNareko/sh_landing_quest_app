import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import styles from "./ContactForm.module.scss";
import * as yup from "yup";
import CustomButton from "@/components/common/CustomButton/CustomButton";

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

const validationSchema = yup.object({
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Enter a valid phone number"
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
    mode: "onChange",
    resolver: useYupValidationResolver(validationSchema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
  };
  console.log("errors", errors);
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
              [styles.contctFmInputError]: errors.name,
            })}
            defaultValue={undefined}
            placeholder="Name"
            {...register("name")}
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
              [styles.contctFmInputError]: errors.phone,
            })}
            defaultValue={undefined}
            placeholder="Phone"
            {...register("phone")}
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
              [styles.contctFmInputError]: errors.email,
            })}
            defaultValue={undefined}
            placeholder="E-mail"
            {...register("email", { required: "This is required." })}
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
          disabled={Object.keys(errors).length !== 0}
          type={"submit"}
          value={"Send"}
        />
      </form>
    </section>
  );
}

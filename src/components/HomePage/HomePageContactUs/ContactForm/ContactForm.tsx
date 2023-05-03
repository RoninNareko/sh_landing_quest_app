import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.scss";
import classNames from "classnames";
import CustomButton from "@/components/common/CustomButton/CustomButton";

type FormInputs = {
  name: string;
  phone: string;
  email: string;
};

export default function App() {
  const cx = classNames.bind(styles);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => console.log(data);
  console.log("errors", errors);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <section className={cx(styles.formContainer)}>
      <form
        className={cx(styles.contactForm)}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <div className={cx(styles.contactFormContainer)}>
          <input
            className={cx(styles.contctFmInput)}
            defaultValue={undefined}
            placeholder="Name"
            {...register("name")}
          />
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div className={cx(styles.contactFormContainer)}>
          <input
            className={cx(styles.contctFmInput)}
            defaultValue={undefined}
            placeholder="Phone"
            {...register("phone")}
          />
        </div>
        <div
          className={cx(styles.contactFormContainer, {
            [styles.contactFormContainerError]: false,
          })}
        >
          <input
            className={cx(styles.contctFmInput, {
              [styles.contctFmInputError]: false,
            })}
            defaultValue={undefined}
            placeholder="E-mail"
            {...register("email", { required: "This is required." })}
          />
        </div>
        {/* errors will return when field validation fails  */}
        {errors.email && <span>This field is required</span>}

        <CustomButton value={"Send"} />
      </form>
    </section>
  );
}

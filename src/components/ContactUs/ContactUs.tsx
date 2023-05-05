import classNames from "classnames";
import styles from "./ContactUs.module.scss";
import ContactForm from "@/components/ContactUs/ContactForm/ContactForm";

export default function ContactUs() {
  const cx = classNames.bind(styles);

  return (
    <>
      <section className={cx(styles.contactUsCnt)}>
        <div className={styles.formContainer}>
          <h2>Contact us</h2>
          <p>Do you have any kind of help please contact with us.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

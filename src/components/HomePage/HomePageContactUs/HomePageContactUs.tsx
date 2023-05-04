import classNames from "classnames";
import styles from "./HomePageContactUs.module.scss";
import ContactForm from "@/components/HomePage/HomePageContactUs/ContactForm/ContactForm";

export default function HomePageContactUs() {
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

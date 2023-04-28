import styles from "./HomePageSteps.module.scss";
import classNames from "classnames";
import Steps from "./Steps/Steps";

export default function HomePageSteps() {
  const cx = classNames.bind(styles);
  return (
    <>
      <header className={cx(styles.headerContainer)}>
        <div>
          <h2 className={cx(styles.headerText)}>Steps</h2>
        </div>
      </header>
      <section className={cx(styles.stepsContext)}>
        <section>
          <Steps />
        </section>
        <section>line</section>
        <section></section>
      </section>
    </>
  );
}

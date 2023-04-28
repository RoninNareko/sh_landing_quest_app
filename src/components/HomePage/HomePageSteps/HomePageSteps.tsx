import styles from "./HomePageSteps.module.scss";
import classNames from "classnames";

export default function HomePageSteps() {
  const cx = classNames.bind(styles);
  return (
    <>
      <header className={cx(styles.headerContainer)}>
        <div>
          <h2 className={cx(styles.headerText)}>Steps</h2>
        </div>
      </header>
      <section className={cx(styles.stepsContext)}>asdasd</section>
    </>
  );
}

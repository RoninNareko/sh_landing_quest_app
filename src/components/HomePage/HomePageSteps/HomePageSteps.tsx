import styles from "./HomePageSteps.module.scss";
import classNames from "classnames";
import Steps from "./Steps/Steps";
import { STAR_BACKGROUND_IMAGE_STYLE } from "@/components/HomePage/HomePageSteps/HomePageSteps.constants";

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
        <i
          style={STAR_BACKGROUND_IMAGE_STYLE}
          className={cx(styles.midStar)}
        ></i>
        <i
          style={STAR_BACKGROUND_IMAGE_STYLE}
          className={cx(styles.midStar1)}
        ></i>
        <i
          style={STAR_BACKGROUND_IMAGE_STYLE}
          className={cx(styles.midStar2)}
        ></i>
        <i
          style={STAR_BACKGROUND_IMAGE_STYLE}
          className={cx(styles.midStar3)}
        ></i>
        <section className={cx(styles.stepsContainer)}>
          <Steps />
          <Steps />
          <Steps />
        </section>
        <section className={cx(styles.stepsLineCnt)}>
          <div className={cx(styles.line)}></div>
          <i className={cx(styles.circle)}></i>
          <i className={cx(styles.circle)}></i>
          <i className={cx(styles.circle)}></i>
          <i className={cx(styles.circle)}></i>
          <i className={cx(styles.circle)}></i>
          <i className={cx(styles.circle)}></i>
        </section>
        <section
          className={cx(styles.stepsContainer, styles.stepsContainerBottom)}
        >
          <Steps position={true} />
          <Steps position={true} />
          <Steps position={true} />
        </section>
      </section>
    </>
  );
}

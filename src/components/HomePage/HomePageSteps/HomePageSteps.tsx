import styles from "./HomePageSteps.module.scss";
import classNames from "classnames";
import Steps from "./Steps/Steps";
import {
  stars,
  steps,
} from "@/components/HomePage/HomePageSteps/HomePageSteps.constants";
import { StepsType } from "@/components/HomePage/HomePageSteps/HomePageSteps.type";
import { StarPropsTypes } from "@/common/Star/Star.types";
import Star from "@/common/Star/Star";

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
        {stars.map(({ id, className, backgroundImage }: StarPropsTypes) => {
          return (
            <Star
              key={id}
              className={className}
              backgroundImage={backgroundImage}
            />
          );
        })}
        <section className={cx(styles.stepsContainer)}>
          {steps.map((step: StepsType) => {
            if (step.id < 4) {
              return <Steps key={step.id} position={false} stepData={step} />;
            }
          })}
        </section>
        <section className={cx(styles.stepsLineCnt)}>
          <div className={cx(styles.line)}></div>
          <i className={cx(styles.circle)}></i>
          <i className={cx(styles.circle)}></i>
          <i className={cx(styles.circle)}></i>
          <i className={cx(styles.circle)}></i>
          <i className={cx(styles.circle)}></i>
          <i className={cx(styles.circle)}></i>
          {/*  map*/}
        </section>
        <section
          className={cx(styles.stepsContainer, styles.stepsContainerBottom)}
        >
          {steps.map((step: StepsType) => {
            if (step.id > 3) {
              return <Steps key={step.id} position={true} stepData={step} />;
            }
          })}
        </section>
      </section>
    </>
  );
}

import styles from "./Steps.module.scss";
import classNames from "classnames";

import {
  circles,
  stars,
  steps,
} from "@/components/HomePage/Steps/Steps.constants";
import { StepsType } from "@/components/HomePage/Steps/Steps.type";
import { StarPropsTypes } from "@/common/Star/Star.types";
import Star from "@/common/Star/Star";
import Step from "@/components/HomePage/Steps/Step/Step";

export default function Steps() {
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
              return <Step key={step.id} position={false} stepData={step} />;
            }
          })}
        </section>
        <section className={cx(styles.stepsLineCnt)}>
          <div className={cx(styles.line)}></div>
          {circles.map((el, idx) => (
            <i key={idx + 1} className={cx(styles.circle)}></i>
          ))}
        </section>
        <section
          className={cx(styles.stepsContainer, styles.stepsContainerBottom)}
        >
          {steps.map((step: StepsType) => {
            if (step.id > 3) {
              return <Step key={step.id} position={true} stepData={step} />;
            }
          })}
        </section>
      </section>
    </>
  );
}

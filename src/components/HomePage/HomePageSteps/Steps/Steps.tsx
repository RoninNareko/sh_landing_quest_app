import styles from "./Steps.module.scss";
import classNames from "classnames";
import {
  STEPS_LEFT_BACKGROUND_VECTOR_STYLE,
  STEPS_RIGHT_BACKGROUND_VECTOR_STYLE,
} from "@/components/HomePage/HomePageSteps/Steps/Steps.constants";
import { StepsProps } from "@/components/HomePage/HomePageSteps/Steps/Steps.types";

export default function Steps({ position }: StepsProps) {
  const cx = classNames.bind(styles);
  return (
    <section
      className={cx(styles.vectorContainer, {
        [styles.vectorContainerRight]: position,
      })}
      style={
        position
          ? STEPS_LEFT_BACKGROUND_VECTOR_STYLE
          : STEPS_RIGHT_BACKGROUND_VECTOR_STYLE
      }
    >
      <div
        className={cx(styles.stepsBlock, {
          [styles.stepsBlockRight]: position,
        })}
      >
        <div>
          <h4>Step 1</h4>
        </div>
        <div>
          <h4>Introduction to Front-End </h4>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non
            semper quis.
          </p>
        </div>
      </div>
    </section>
  );
}

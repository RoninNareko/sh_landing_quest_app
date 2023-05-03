import styles from "./Steps.module.scss";
import classNames from "classnames";
import {
  STEPS_LEFT_BACKGROUND_VECTOR_STYLE,
  STEPS_RIGHT_BACKGROUND_VECTOR_STYLE,
} from "@/components/HomePage/HomePageSteps/Steps/Steps.constants";
import { StepsProps } from "@/components/HomePage/HomePageSteps/Steps/Steps.types";

export default function Steps({ position, stepData }: StepsProps) {
  const cx = classNames.bind(styles);
  const { title, subTitle, description } = stepData;
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
          <h4>{title}</h4>
        </div>
        <div>
          <h4>{subTitle}</h4>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}

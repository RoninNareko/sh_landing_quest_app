import styles from "./Step.module.scss";
import classNames from "classnames";
import {
  STEPS_LEFT_BACKGROUND_VECTOR_STYLE,
  STEPS_RIGHT_BACKGROUND_VECTOR_STYLE,
} from "@/components/Steps/Step/Step.constants";
import { StepsProps } from "@/components/Steps/Step/Step.types";

export default function Step({ position, stepData }: StepsProps) {
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

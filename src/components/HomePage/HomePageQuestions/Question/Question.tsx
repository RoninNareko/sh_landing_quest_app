import styles from "./Question.module.scss";
import { QUESTION_BACKGROUND_IMAGE } from "./Question.constants";
import classNames from "classnames";
import Image from "next/image";
import showMinus from "@/assets/images/show_minus.svg";
import showPluse from "@/assets/images/Show_pluse.svg";

import { QuestionPropsTypes } from "@/components/HomePage/HomePageQuestions/Question/Question.types";
import { useState } from "react";
import { STEP_IMAGE_ALT } from "@/components/HomePage/HomePageSteps/Steps/Steps.constants";

export default function Question({ question }: QuestionPropsTypes) {
  const cx = classNames.bind(styles);
  const { title, description } = question;
  const [show, setShow] = useState<true | false>(false);
  return (
    <section
      className={cx(styles.questionContainer, { [styles.close]: !show })}
      style={QUESTION_BACKGROUND_IMAGE}
    >
      <div
        className={cx(styles.openCloseBtn)}
        onClick={() => {
          setShow(!show);
        }}
      >
        <Image src={show ? showMinus : showPluse} alt={STEP_IMAGE_ALT} />
      </div>
      <h4>{title}</h4>
      {show && <p>{description}</p>}
    </section>
  );
}

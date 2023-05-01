import classNames from "classnames";
import styles from "./HomePageQuestions.module.scss";
import quesiontImg from "@/assets/images/harcakan.png";
import Image from "next/image";
import Question from "@/components/HomePage/HomePageQuestions/Question/Question";
import {
  questions,
  STAR_BACKGROUND_IMAGE_STYLE,
} from "@/components/HomePage/HomePageQuestions/HomePageQuestions.constants";
import { QuestionsType } from "@/components/HomePage/HomePageQuestions/HomePageQuestions.types";

export default function HomePageQuestions() {
  const cx = classNames.bind(styles);
  return (
    <>
      <header className={cx(styles.headerContainer)}>
        <div className={cx(styles.textContainer)}>
          <h2 className={cx(styles.headerText)}>Frequently Asked Questions</h2>
        </div>
      </header>
      <div className={cx(styles.sectionsContainer)}>
        <i
          style={STAR_BACKGROUND_IMAGE_STYLE}
          className={cx(styles.midStar)}
        ></i>
        <i
          style={STAR_BACKGROUND_IMAGE_STYLE}
          className={cx(styles.miniStar)}
        ></i>
        <section className={cx(styles.sectionOne)}>
          <p>Do you have any kind of questions? We are here to help.</p>
          <div>
            <Image src={quesiontImg} alt={quesiontImg.name} />
          </div>
        </section>
        <section>
          {questions.map((question: QuestionsType) => (
            <Question key={question.id} question={question} />
          ))}
        </section>
      </div>
    </>
  );
}

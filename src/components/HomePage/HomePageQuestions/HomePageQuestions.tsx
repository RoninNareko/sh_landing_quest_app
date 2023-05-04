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
import { IMG_ALT } from "./HomePageQuestions.constants";
import Star from "@/common/Star/Star";

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
        <Star
          backgroundImage={STAR_BACKGROUND_IMAGE_STYLE}
          className={cx(styles.midStar)}
        />
        <Star
          backgroundImage={STAR_BACKGROUND_IMAGE_STYLE}
          className={cx(styles.miniStar)}
        />
        <section className={cx(styles.sectionOne)}>
          <p>Do you have any kind of questions? We are here to help.</p>
          <div>
            <Image src={quesiontImg} alt={IMG_ALT} />
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

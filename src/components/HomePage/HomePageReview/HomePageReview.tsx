import styles from "./HomePageReview.module.scss";
import classNames from "classnames";
import leftArrow from "@/assets/images/leftArrow.png";
import rightArrow from "@/assets/images/rightArrow.png";
import Image from "next/image";
import Carouselitem from "@/components/HomePage/HomePageReview/Carouselitem/Carouselitem";
import { carouselItems } from "@/components/HomePage/HomePageReview/HomePageReview.constants";
import { CarouselItemsType } from "@/components/HomePage/HomePageReview/HomePageReview.types";
import {
  IMG_ALT,
  STAR_BACKGROUND_IMAGE_STYLE,
} from "./HomePageReview.constants";

export default function HomePageReview() {
  const cx = classNames.bind(styles);
  return (
    <>
      <header className={cx(styles.headerContainer)}>
        <div>
          <h2 className={cx(styles.headerText)}>Review</h2>
        </div>
      </header>
      <section className={cx(styles.reviewContext)}>
        <section className={cx(styles.sectionsContainer)}>
          <div className={cx(styles.carouselSection)}>
            <section className={cx(styles.textCnt)}>
              <h4>Best courses ever</h4>
              <p>
                Good course, up to this point, still ongoing. The only downside,
                why I gave 4,5 stars, because the &quot;teacher&quot; sometimes
                feel like, he is lost, and takes up quite a time, to correct
                himself, and check back etc.
              </p>
            </section>
            <section className={cx(styles.headerSectionCnt)}>
              <section className={cx(styles.headerSection)}>
                <div className={cx(styles.headerSectionContext)}>
                  <p>1/</p>
                  <p>3</p>
                </div>
                <div className={cx(styles.buttonsCnt)}>
                  <button>
                    <Image src={leftArrow} alt={IMG_ALT} />
                  </button>
                  <button>
                    <Image src={rightArrow} alt={IMG_ALT} />
                  </button>
                </div>
              </section>
              <section className={cx(styles.carouselItemsContainer)}>
                <i
                  style={STAR_BACKGROUND_IMAGE_STYLE}
                  className={cx(styles.midStar)}
                ></i>
                {carouselItems.map((el: CarouselItemsType, idx: number) => {
                  return (
                    <Carouselitem key={el.id} data={el} active={el.id === 1} />
                  );
                })}
              </section>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

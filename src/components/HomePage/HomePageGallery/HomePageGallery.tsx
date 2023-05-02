import styles from "./HomePageGallery.module.scss";
import classNames from "classnames";
import Image from "next/image";
import mask1 from "@/assets/images/mask1.png";
import dev1 from "@/assets/images/dev1.png";
import dev2 from "@/assets/images/dev2.png";
import dev3 from "@/assets/images/dev3.png";
import { STAR_BACKGROUND_IMAGE_STYLE } from "@/components/HomePage/HomePageReview/HomePageReview.constants";

export default function HomePageGallery() {
  const cx = classNames.bind(styles);
  return (
    <>
      <header className={cx(styles.headerContainer)}>
        <div>
          <h2 className={cx(styles.headerText)}>Gallery</h2>
        </div>
      </header>
      <section className={cx(styles.gridContainerParent)}>
        <i
          style={STAR_BACKGROUND_IMAGE_STYLE}
          className={cx(styles.miniStar)}
        ></i>
        <i
          style={STAR_BACKGROUND_IMAGE_STYLE}
          className={cx(styles.miniStar2)}
        ></i>
        <i
          style={STAR_BACKGROUND_IMAGE_STYLE}
          className={cx(styles.midStar)}
        ></i>
        <div className={cx(styles.gridContainer)}>
          <div className={cx(styles.left)}>
            <p>
              By the end of this course, you will be able to develop and publish
              your very own Google Chrome extension! In this course we will
              focus on coding exercises and projects.
            </p>
            <Image src={mask1} alt={"image"} />
          </div>
          <div className={cx(styles.top)}>
            <div>
              <Image src={dev1} alt={"image"} />
            </div>
            <div className={cx(styles.gridContainerImages)}>
              <Image src={dev2} alt={"image"} />
              <Image src={dev3} alt={"image"} />
            </div>
          </div>
          <div className={cx(styles.bottom)}>
            If you would like to learn web development and get a job in the tech
            industry, you are going to LOVE this course! Learn HTML, CSS,
            JavaScript, Bootstrap and more with over 15 hours of HD video
            tutorials! This course was designed to be extremely beginner
            friendly. We will begin with the very basics of HTML and build a
            simple web page.
          </div>
        </div>
      </section>
    </>
  );
}

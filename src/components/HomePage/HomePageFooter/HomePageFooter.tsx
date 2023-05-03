import classNames from "classnames";
import styles from "./HomePageFooter.module.scss";
import logo from "@/assets/images/logo webtronics 2.svg";
import Image from "next/image";
import fb from "@/assets/images/social/facebook.svg";
import lisa from "@/assets/images/social/lisa.svg";
import tw from "@/assets/images/social/twit.svg";
import linked from "@/assets/images/social/linkdin.svg";

export default function HomePageFooter() {
  const cx = classNames.bind(styles);
  return (
    <footer className={cx(styles.footerContainer)}>
      <section>
        <div>
          <Image src={logo} alt={"sd"} />
        </div>
        <div className={cx(styles.descContainer)}>
          <p>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
        </div>
      </section>
      <section className={cx(styles.footerNav)}>
        <ul>
          <li className={cx(styles.navTitle)}>Company</li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="#">Carres</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
      </section>
      <section className={cx(styles.footerNav)}>
        <ul>
          <li className={cx(styles.navTitle)}></li>
          <li>
            <a href="">Teams</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </section>
      <section className={cx(styles.footerNav)}>
        <ul className={cx(styles.socialNavCnt)}>
          <li className={cx(styles.navTitle)}>Social media</li>
          <a href="/">
            <Image src={fb} alt={"fb"} />
          </a>
          <a href="/">
            <Image src={lisa} alt={"fb"} />
          </a>
          <a href="/">
            <Image src={tw} alt={"fb"} />
          </a>
          <a href="/">
            <Image src={linked} alt={"fb"} />
          </a>
        </ul>
      </section>
    </footer>
  );
}

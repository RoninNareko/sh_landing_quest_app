import classNames from "classnames";
import styles from "./HomePageFooter.module.scss";
import logo from "@/assets/images/logo webtronics 2.svg";
import Image from "next/image";
import {
  footerLinks,
  footerSocialLinks,
  IMG_ALT,
} from "@/components/HomePage/HomePageFooter/HomePageFooter.constants";
import {
  FooterLinksTypes,
  FooterSocialLinksTypes,
} from "@/components/HomePage/HomePageFooter/HomePageFooter.types";

export default function HomePageFooter() {
  const cx = classNames.bind(styles);

  return (
    <footer className={cx(styles.footerContainer)}>
      <section>
        <div>
          <Image src={logo} alt={IMG_ALT} />
        </div>
        <div className={cx(styles.descContainer)}>
          <p>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
        </div>
      </section>
      <section className={cx(styles.footerNav)}>
        <ul>
          <li className={cx(styles.navTitle)}>Company</li>
          {footerLinks.map(({ id, href, text }: FooterLinksTypes) => {
            if (id < 4) {
              return (
                <li key={id}>
                  <a href={href}>{text}</a>
                </li>
              );
            }
          })}
        </ul>
      </section>
      <section className={cx(styles.footerNav)}>
        <ul>
          <li className={cx(styles.navTitle)}></li>
          {footerLinks.map(({ id, href, text }: FooterLinksTypes) => {
            if (id > 3) {
              return (
                <li key={id}>
                  <a href={href}>{text}</a>
                </li>
              );
            }
          })}
        </ul>
      </section>
      <section className={cx(styles.footerNav)}>
        <ul className={cx(styles.socialNavCnt)}>
          <li className={cx(styles.navTitle)}>Social media</li>
          {footerSocialLinks.map(
            ({ id, href, image }: FooterSocialLinksTypes) => (
              <a key={id} href={href}>
                <Image src={image} alt={IMG_ALT} />
              </a>
            )
          )}
        </ul>
      </section>
    </footer>
  );
}

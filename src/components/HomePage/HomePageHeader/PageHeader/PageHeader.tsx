import styles from "@/components/HomePage/HomePageHeader/HomePageHeader.module.scss";
import Image from "next/image";
import logo from "@/assets/images/logo webtronics 2.svg";
import { LOGO_IMG_ALT } from "@/components/HomePage/HomePageHeader/HomePage.Header.constants";
import classNames from "classnames";
import { UNDEFINED_LINK_URL } from "@/components/HomePage/HomePageHeader/PageHeader/PageHeader.constants";

export default function PageHeader() {
  const cx = classNames.bind(styles);
  return (
    <header>
      <div className={cx(styles.navbar_container)}>
        <nav className={cx(styles.navBar)}>
          <div className={cx(styles.logoContainer)}>
            <Image src={logo} alt={LOGO_IMG_ALT} />
          </div>
          <ul>
            <li>
              <a href={UNDEFINED_LINK_URL}>About</a>
            </li>
            <li>
              <a href={UNDEFINED_LINK_URL}>Programs</a>
            </li>
            <li>
              <a href={UNDEFINED_LINK_URL}>Steps</a>
            </li>
            <li>
              <a href={UNDEFINED_LINK_URL}>Questions</a>
            </li>
            <li>
              <a href={UNDEFINED_LINK_URL}>Get in touch</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

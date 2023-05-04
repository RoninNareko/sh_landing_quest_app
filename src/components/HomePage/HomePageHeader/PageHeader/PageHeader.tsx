import styles from "./PageHeader.module.scss";
import Image from "next/image";
import logo from "@/assets/images/logo webtronics 2.svg";
import { LOGO_IMG_ALT } from "@/components/HomePage/HomePageHeader/HomePage.Header.constants";
import classNames from "classnames";
import { navLinks } from "@/components/HomePage/HomePageHeader/PageHeader/PageHeader.constants";

export default function PageHeader() {
  const cx = classNames.bind(styles);

  return (
    <header>
      <div>
        <nav className={cx(styles.navBar)}>
          <div className={cx(styles.logoContainer)}>
            <Image src={logo} alt={LOGO_IMG_ALT} />
          </div>
          <ul>
            {navLinks.map(({ id, href, text }: NavLinksTypes) => {
              return (
                <li key={id}>
                  <a href={href}>{text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

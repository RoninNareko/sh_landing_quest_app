import styles from "./HomePageAboutUs.module.scss";
import classNames from "classnames";
import Image from "next/image";
import member1 from "./../../../assets/images/members/member1.png";
const cx = classNames.bind(styles);

const Member = () => (
  <div className={cx(styles.memberBlock)}>
    <div className={cx(styles.memberBlockContext)}>
      <div className={cx(styles.imgBorderCnt)}>
        <Image src={member1} alt={"alt"} />
      </div>
      <h4>Wade Warren</h4>
      <p>Front-end engineers work closely with designers</p>
    </div>
  </div>
);

export default function HomePageAboutUs() {
  return (
    <section className={cx(styles.aboutUscontextContainer)}>
      <section className={cx(styles.sections)}>
        <div className={cx(styles.mentorsSection)}>
          <div>
            <h3>Mentros</h3>
          </div>
          <div className={cx(styles.teamContainer)}>
            <Member />
            <Member />
            <Member />
          </div>
        </div>
        <div className={cx(styles.textSection)}>
          <p>
            Front-end engineers work closely with designers to make websites
            beautiful, functional, and fast. This Career Path will teach you not
            only the necessary languages and technologies, but how to think like
            a front-end engineer, too.
          </p>
        </div>
      </section>
    </section>
  );
}

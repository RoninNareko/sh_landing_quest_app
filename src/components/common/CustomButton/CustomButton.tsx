import classNames from "classnames";
import styles from "./CustomButton.styles.module.scss";
import { CustomButtonProps } from "@/components/common/CustomButton/CustomButton.types";

export default function CustomButton({
  value,
  disabled,
  type,
}: CustomButtonProps) {
  const cx = classNames.bind(styles);
  return (
    <button type={type} disabled={disabled} className={cx(styles.cutomButton)}>
      {value}
    </button>
  );
}

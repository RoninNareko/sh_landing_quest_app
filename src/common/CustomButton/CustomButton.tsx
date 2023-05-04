import classNames from "classnames";
import styles from "./CustomButton.styles.module.scss";
import { CustomButtonProps } from "@/common/CustomButton/CustomButton.types";

export default function CustomButton({
  value,
  disabled = false,
  type,
}: CustomButtonProps) {
  const cx = classNames.bind(styles);
  return (
    <button type={type} disabled={disabled} className={cx(styles.cutomButton)}>
      {value}
    </button>
  );
}

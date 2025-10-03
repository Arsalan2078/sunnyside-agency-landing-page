import styles from "./index.module.scss";
import type { ComponentProps } from "react";

export default function ButtonContact({
  className,
  ...props
}: ComponentProps<"a">) {
  return <a className={`${styles.button}`} {...props} />;
}

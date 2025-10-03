import type { ComponentProps } from "react";
import styles from "./index.module.scss";

type ButtonDefaultProps = {
  variation: "1" | "2";
} & ComponentProps<"a">;

export default function ButtonDefault({
  variation,
  className,
  ...props
}: ButtonDefaultProps) {
  return (
    <a
      className={`${styles.button} ${
        variation === "1" ? styles.button1 : styles.button2
      } ${className}`}
      {...props}
    />
  );
}

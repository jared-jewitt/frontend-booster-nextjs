import React from "react";
import styles from "./styles.module.scss";

export interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Error({ className, children }: Props): React.ReactElement {
  return <div className={`${styles.root} ${className}`}>{children}</div>;
}

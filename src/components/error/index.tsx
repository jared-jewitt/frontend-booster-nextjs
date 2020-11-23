import React from "react";
import styles from "./styles.module.scss";

export interface IProps {
  children: React.ReactNode;
}

export default function Error({ children }: IProps): React.ReactElement {
  return <div className={styles.root}>{children}</div>;
}

import React from "react";
import styles from "@/components/error/styles.module.scss";

export interface IProps {
  className?: string;
  children: React.ReactNode;
}

export default function Error({ className, children }: IProps): React.ReactElement {
  return <div className={`${styles.root} ${className}`}>{children}</div>;
}

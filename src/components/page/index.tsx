import React from "react";
import Head from "next/head";
import { Header } from "@/components";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
}

export default function Page({ title, description, className, children }: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.root}>
        <Header />
        <main className={`${styles.main} ${className}`}>{children}</main>
      </div>
    </>
  );
}

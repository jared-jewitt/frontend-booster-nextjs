import React from "react";
import Head from "next/Head";
import { Header } from "@/components";
import styles from "./styles.module.scss";

interface IProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function Page({ title, description, children }: IProps): React.ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.root}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}

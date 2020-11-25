import React from "react";
import { Error, Page } from "@/components";
import styles from "@/pages/404/styles.module.scss";

export default function NotFound(): React.ReactElement {
  return (
    <Page className={styles.root} title="NextJS Boilerplate | 404" description="Page not found">
      <Error>404 - Page not found</Error>
    </Page>
  );
}

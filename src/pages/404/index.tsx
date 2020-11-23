import React from "react";
import { Error, Page } from "@/components";
import styles from "./styles.module.scss";

export default function NotFound(): React.ReactElement {
  return (
    <Page title="NextJS Boilerplate | 404" description="Page not found">
      <Error>
        <div className={styles.root}>404 - Page not found</div>
      </Error>
    </Page>
  );
}

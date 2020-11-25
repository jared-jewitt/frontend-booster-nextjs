import React from "react";
import { Page } from "@/components";
import styles from "@/pages/account/styles.module.scss";

export default function Account(): React.ReactElement {
  return (
    <Page className={styles.root} title="NextJS Boilerplate | Account" description="Account page">
      <p>My Account</p>
      <ul>
        <li>Email: foo.bar@baz.com</li>
        <li>Display name: Foo Bar Baz</li>
        <li>Date of Birth: 1990/01/01</li>
      </ul>
    </Page>
  );
}

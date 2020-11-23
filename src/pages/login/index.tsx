import React from "react";
import Image from "next/image";
import { AuthContext } from "@/store";
import { Page } from "@/components";
import styles from "./styles.module.scss";

export default function Login(): React.ReactElement {
  const { login, state } = React.useContext(AuthContext);

  return (
    <Page title="NextJS Boilerplate | Login" description="Login page">
      <div className={styles.root}>
        <Image src="/images/logo.svg" alt="Logo" height={200} width={200} />
        <br />
        <button disabled={state.isLoading} onClick={() => login()}>
          Simulate Login
        </button>
      </div>
    </Page>
  );
}

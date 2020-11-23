import React from "react";
import Link from "next/link";
import { AuthContext } from "@/store";
import styles from "./styles.module.scss";

export default function Header(): React.ReactElement {
  const { logout, state } = React.useContext(AuthContext);

  return (
    <div className={styles.root}>
      {state.isAuthenticated ? (
        <>
          <button disabled={state.isLoading} onClick={() => logout()}>
            Simulate Logout
          </button>
          <Link href="/account">Account</Link>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
}

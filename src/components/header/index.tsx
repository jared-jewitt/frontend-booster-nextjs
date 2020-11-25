import React from "react";
import Link from "next/link";
import { AuthContext } from "@/store";
import styles from "@/components/header/styles.module.scss";

export interface IProps {
  className?: string;
}

export default function Header({ className }: IProps): React.ReactElement {
  const { logout, state } = React.useContext(AuthContext);

  return (
    <div className={`${styles.root} ${className}`}>
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

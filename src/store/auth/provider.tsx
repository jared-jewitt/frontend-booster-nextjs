import React from "react";
import { useRouter } from "next/router";
import { cookie } from "@/utils";
import Context from "./context";

export interface Props {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

export interface State extends Pick<Props, "isAuthenticated"> {
  isLoading: boolean;
}

export default function AuthProvider({ children, isAuthenticated }: Props): React.ReactElement {
  const router = useRouter();
  const [state, setState] = React.useState<State>({ isAuthenticated, isLoading: false });

  const login = async (): Promise<void> => {
    try {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      await new Promise((res) => setTimeout(res, 250));
      cookie.set("isAuthenticated", true, { days: 7 });
      setState({ isAuthenticated: true, isLoading: false });
      await router.replace("/products");
    } catch (e) {
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      await new Promise((res) => setTimeout(res, 250));
      cookie.delete("isAuthenticated");
      setState({ isAuthenticated: false, isLoading: false });
      await router.replace("/login");
    } catch (e) {
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  return (
    <Context.Provider
      value={{
        login,
        logout,
        state,
      }}
    >
      {children}
    </Context.Provider>
  );
}

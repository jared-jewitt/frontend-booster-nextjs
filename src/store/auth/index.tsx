import React from "react";
import { useRouter } from "next/router";
import { Cookie } from "@/utils";

export interface IContext {
  login: () => void;
  logout: () => void;
  state: IState;
}

export interface IState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const AuthContext = React.createContext<IContext>({
  login: () => null,
  logout: () => null,
  state: null,
});

export const AuthConsumer = ({ children }: { children: (value: IContext) => React.ReactNode }): React.ReactElement => {
  return <AuthContext.Consumer>{(value) => children(value)}</AuthContext.Consumer>;
};

export const AuthProvider = ({
  children,
  isAuthenticated,
}: {
  children: React.ReactNode;
  isAuthenticated: boolean;
}): React.ReactElement => {
  const router = useRouter();
  const [state, setState] = React.useState<IState>({ isAuthenticated, isLoading: false });

  // TODO: Replace with your own login logic.
  const login = async (): Promise<void> => {
    try {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      await new Promise((res) => setTimeout(res, 250));
      Cookie.set("isAuthenticated", true, { path: "/", days: 7 });
      setState({ isAuthenticated: true, isLoading: false });
      await router.replace("/products");
    } catch (e) {
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  // TODO: Replace with your own logout logic.
  const logout = async (): Promise<void> => {
    try {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      await new Promise((res) => setTimeout(res, 250));
      Cookie.delete("isAuthenticated", { path: "/" });
      setState({ isAuthenticated: false, isLoading: false });
      await router.replace("/products");
    } catch (e) {
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

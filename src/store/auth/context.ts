import React from "react";
import { IState } from "@/store/auth/provider";

export interface IContext {
  login: () => void;
  logout: () => void;
  state: IState;
}

export default React.createContext<IContext>({
  login: () => null,
  logout: () => null,
  state: null,
});

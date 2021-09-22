import React from "react";
import { State } from "./provider";

export interface Context {
  login: () => void;
  logout: () => void;
  state: State;
}

export default React.createContext<Context>({
  login: () => null,
  logout: () => null,
  state: null,
});

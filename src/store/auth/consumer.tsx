import React from "react";
import Context, { Context as IContext } from "./context";

export interface Props {
  children: (value: IContext) => React.ReactNode;
}

export default function AuthConsumer({ children }: Props): React.ReactElement {
  return <Context.Consumer>{(value) => children(value)}</Context.Consumer>;
}

import React from "react";
import Context, { IContext } from "@/store/auth/context";

export interface IProps {
  children: (value: IContext) => React.ReactNode;
}

export default function AuthConsumer({ children }: IProps): React.ReactElement {
  return <Context.Consumer>{(value) => children(value)}</Context.Consumer>;
}

import React from "react";
import _App, { AppProps, AppContext, AppInitialProps } from "next/app";
import { Guard, guards } from "@/constants";
import { Cookie } from "@/utils";
import { AuthProvider } from "@/store";
import "@/index.scss";

export default class extends _App<AppProps & { isAuthenticated: boolean }> {
  static async getInitialProps(appContext: AppContext): Promise<AppInitialProps & { isAuthenticated: boolean }> {
    const initialProps = await _App.getInitialProps(appContext);

    const isAuthenticated = process.browser
      ? JSON.parse(Cookie.get("isAuthenticated") || null) ?? false
      : JSON.parse(appContext.ctx.req["cookies"]?.isAuthenticated || null) ?? false;
    const guard = guards[appContext.ctx.pathname];
    const isValidPrivateRequest = isAuthenticated && guard === Guard.Private;
    const isValidPublicRequest = !isAuthenticated && guard === Guard.Public;
    const isValidSharedRequest = guard === Guard.Shared;

    if (guard && !isValidPrivateRequest && !isValidPublicRequest && !isValidSharedRequest) {
      if (process.browser) {
        await appContext.router.replace("/products");
      } else {
        appContext.ctx.res.writeHead(307, { Location: "/products" });
        appContext.ctx.res.end();
      }
    }

    return { ...initialProps, isAuthenticated };
  }

  render(): React.ReactElement {
    const { Component, pageProps, isAuthenticated } = this.props;

    return (
      <AuthProvider isAuthenticated={isAuthenticated}>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }
}

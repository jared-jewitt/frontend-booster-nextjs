import React from "react";
import Router from "next/router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import _App, { AppProps, AppContext, AppInitialProps } from "next/app";
import { Guard, GUARDS } from "@/constants";
import { cookie } from "@/utils";
import { AuthProvider } from "@/store";
import "@/scss/global.scss";

nprogress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", nprogress.start);
Router.events.on("routeChangeComplete", nprogress.done);
Router.events.on("routeChangeError", nprogress.done);

export default class extends _App<AppProps & { isAuthenticated: boolean }> {
  static async getInitialProps(appContext: AppContext): Promise<AppInitialProps & { isAuthenticated: boolean }> {
    const initialProps = await _App.getInitialProps(appContext);

    const isAuthenticated = process.browser
      ? JSON.parse(cookie.get("isAuthenticated") || null) ?? false
      : JSON.parse(appContext.ctx.req["cookies"]?.isAuthenticated || null) ?? false;
    const guard = GUARDS[appContext.ctx.pathname];
    const isValidPrivateRequest = isAuthenticated && guard === Guard.Private;
    const isValidPublicRequest = !isAuthenticated && guard === Guard.Public;
    const isValidSharedRequest = guard === Guard.Shared;

    if (guard && !isValidPrivateRequest && !isValidPublicRequest && !isValidSharedRequest) {
      const redirect = isAuthenticated ? "/products" : "/login";
      if (process.browser) {
        await appContext.router.replace(redirect);
      } else {
        appContext.ctx.res.writeHead(307, { Location: redirect });
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

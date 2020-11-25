interface IOptions {
  path?: string;
  domain?: string;
  secure?: boolean;
  days: number;
}

export const Cookie = {
  get(name: string): string {
    const cookie = document.cookie.match(`(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`)[1];
    if (cookie) return decodeURIComponent(cookie);
  },
  set(name: string, value: string | number | boolean, options: IOptions): void {
    options["max-age"] = options.days * 60 * 60 * 24;
    delete options.days;

    document.cookie =
      name + "=" + encodeURIComponent(value) + Object.entries(options).reduce((acc, [k, v]) => `${acc}; ${k}=${v}`, "");
  },
  delete(name: string, options?: Pick<IOptions, "path" | "domain">): void {
    this.set(name, "", { ...options, days: -1 });
  },
};

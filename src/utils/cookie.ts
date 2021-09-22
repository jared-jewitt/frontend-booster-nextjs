interface Options {
  path?: string;
  domain?: string;
  secure?: boolean;
  days?: number;
}

export const cookie = {
  get(name: string): string {
    const cookie = document.cookie.match(`(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`)[1];
    if (cookie) return decodeURIComponent(cookie);
  },
  set(name: string, value: string | number | boolean, options: Options = {}): void {
    if (options.days) {
      options["max-age"] = options.days * 60 * 60 * 24;
      delete options.days;
    }

    document.cookie =
      name + "=" + encodeURIComponent(value) + Object.entries(options).reduce((acc, [k, v]) => `${acc}; ${k}=${v}`, "");
  },
  delete(name: string): void {
    this.set(name, "", { days: -1 });
  },
};

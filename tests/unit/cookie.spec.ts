import { expect } from "chai";

// @ts-ignore
import { cookie } from "@/utils";

Object.defineProperty(window.document, "cookie", {
  writable: true,
});

describe("cookie function", () => {
  it(`gets a cookie "foo" with the value "bar"`, () => {
    Object.defineProperty(window.document, "cookie", {
      value: "foo=bar;",
    });

    expect(cookie.get("foo")).to.equal("bar");
  });

  it(`fails to retrieve a cookie`, () => {
    Object.defineProperty(window.document, "cookie", {
      value: "",
    });

    expect(cookie.get("foo")).to.equal(undefined);
  });

  it(`sets a cookie`, () => {
    cookie.set("bar", "baz", { path: "/", domain: "localhost", secure: true, days: 7 });

    expect(document.cookie).to.equal("bar=baz; path=/; domain=localhost; secure=true; max-age=604800");
  });

  it(`deletes a cookie`, () => {
    cookie.delete("bar");

    expect(document.cookie).to.equal("bar=; max-age=-86400");
  });
});

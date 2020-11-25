import React from "react";
import Login from "@/pages/login";
import { Cookie } from "@/utils";
import { render } from "../../utils";

describe("Login page", () => {
  beforeAll(() => {
    Cookie.set("isAuthenticated", true, { days: 7, path: "/" });
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Login />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});

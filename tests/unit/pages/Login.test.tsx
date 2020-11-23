import React from "react";
import Login from "@/pages/login";
import { render } from "../../utils";

describe("Login page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Login />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});

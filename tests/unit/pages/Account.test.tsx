import React from "react";
import Account from "@/pages/account";
import { render } from "../../utils";

describe("Account page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Account />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});

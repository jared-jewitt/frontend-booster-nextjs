import React from "react";
import NotFound from "@/pages/404";
import { render } from "../../utils";

describe("Not found page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<NotFound />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});

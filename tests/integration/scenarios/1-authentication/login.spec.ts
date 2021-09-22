/// <reference types="../../support" />

describe("authentication - login flow", () => {
  it("logs the user in", () => {
    cy.login();
  });
});

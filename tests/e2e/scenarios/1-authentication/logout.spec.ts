/// <reference types="../../support" />

describe("authentication - logout flow", () => {
  before(() => {
    cy.login();
  });

  it("logs the user out", () => {
    cy.logout();
  });
});

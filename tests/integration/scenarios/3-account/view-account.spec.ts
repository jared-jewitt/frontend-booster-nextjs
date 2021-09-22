/// <reference types="../../support" />

describe("account - view account flow", () => {
  before(() => {
    cy.login();
  });

  beforeEach(() => {
    cy.visit(`http://localhost:${Cypress.env("port")}/products`);
  });

  it("displays the account page", () => {
    const accountLinkSelector = "#__next > div > div > a";

    cy.get(accountLinkSelector).should("have.text", "Account");
    cy.get(accountLinkSelector).click();
    cy.location("pathname").should("equal", "/account");
  });
});

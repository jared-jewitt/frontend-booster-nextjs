/// <reference types="../../support" />

describe("products - view product flow", () => {
  before(() => {
    cy.login();
  });

  beforeEach(() => {
    cy.visit(`http://localhost:${Cypress.env("port")}/products`);
  });

  it("views the first product", () => {
    const firstProductLinkSelector = "#__next > div > main > ul > li:nth-child(1) > a";

    cy.get(firstProductLinkSelector).should("have.text", "Product #1");
    cy.get(firstProductLinkSelector).click();
    cy.location("pathname").should("equal", "/products/1");
  });

  it("views the second product", () => {
    const firstProductLinkSelector = "#__next > div > main > ul > li:nth-child(2) > a";

    cy.get(firstProductLinkSelector).should("have.text", "Product #2");
    cy.get(firstProductLinkSelector).click();
    cy.location("pathname").should("equal", "/products/2");
  });

  it("views the third product", () => {
    const firstProductLinkSelector = "#__next > div > main > ul > li:nth-child(3) > a";

    cy.get(firstProductLinkSelector).should("have.text", "Product #3");
    cy.get(firstProductLinkSelector).click();
    cy.location("pathname").should("equal", "/products/3");
  });
});

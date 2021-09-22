/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (...args) => {
  const loginButtonSelector = "#__next > div > main > button";

  cy.visit(`http://localhost:${Cypress.env("port")}/login`);
  cy.get(loginButtonSelector).contains("Simulate Login").click();
  cy.location("pathname").should("equal", "/products");
});

Cypress.Commands.add("logout", (...args) => {
  const logoutButtonSelector = "#__next > div > div > button";

  cy.visit(`http://localhost:${Cypress.env("port")}/products`);
  cy.get(logoutButtonSelector).contains("Simulate Logout").click();
  cy.location("pathname").should("equal", "/login");
});

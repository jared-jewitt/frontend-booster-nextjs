/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login the user.
     * @example cy.login();
     */
    login(): Chainable<Element>;

    /**
     * Custom command to logout the user.
     * @example cy.logout();
     */
    logout(): Chainable<Element>;
  }
}

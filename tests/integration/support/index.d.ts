/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    login(...args: string[]): Chainable<any>;
    logout(...args: string[]): Chainable<any>;
  }
}

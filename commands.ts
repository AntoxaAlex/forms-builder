<<<<<<< HEAD:cypress/support/commands.ts
// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************

import '@4tw/cypress-drag-drop';

declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(email: string, password: string): typeof login;
  }
}

function login(email: string, password: string): void {
  cy.visit('/login');
  cy.url().should('includes', 'login');
  cy.get('input').eq(0).type('user@gmail.com');
  cy.get('input').eq(1).type('usertest');
  cy.get('button').click();
  cy.url().should('include', 'forms-builder');
}

// NOTE: You can use it like so:
Cypress.Commands.add('login', login);
//
// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
=======
// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************

import '@4tw/cypress-drag-drop'

declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(email:string,password:string): typeof login;
  }
}

function login(email:string,password:string): void {
  cy.visit('/login');
  cy.url().should("includes","login");
  cy.get("input").eq(0).type("user@gmail.com");
  cy.get("input").eq(1).type("usertest");
  cy.get("button").click();
  cy.url().should("include","forms-builder")
}

// NOTE: You can use it like so:
Cypress.Commands.add('login', login);
//
// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
>>>>>>> 2b441f217a0e0a74d8e2419cdcbeb50a1bcfd267:commands.ts

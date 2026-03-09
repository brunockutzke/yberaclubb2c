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

import locators from "../support/locators/locators"

Cypress.Commands.add("login", (email, password) => {
  cy.env(["baseUrl"]).then(({ baseUrl }) => {
    cy.visit(baseUrl)
    cy.get(locators.USER_INPUT).type(email)
    cy.get(locators.PASSWORD_INPUT).type(password)
    cy.get(locators.LOGIN_BTN).click()
    cy.get("a[href='/home']")
  })
})

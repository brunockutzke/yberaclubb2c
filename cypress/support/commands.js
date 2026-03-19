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
    cy.get(locators.USER_INPUT).type(email, {log:false})
    cy.get(locators.PASSWORD_INPUT).type(password, {log:false})
    cy.get(locators.LOGIN_BTN).click()
    cy.get("a[href='/home']")
  })
})

Cypress.Commands.add("fillCreditCardData", (cardName, cardNumber, expirationMonth, expirationYear, cvv) => {
    cy.get("input[name='cardName']").type(cardName, {log:false})
    cy.get("div[class='relative'] > img ~ input").type(cardNumber, {log:false})
    cy.get("input[placeholder='00']").type(expirationMonth, {log:false})
    cy.get("input[placeholder='0000']").type(expirationYear, {log:false})
    cy.get("input[placeholder='000']").type(cvv, {log:false})
    cy.get("select").select(1, { force: true })
})
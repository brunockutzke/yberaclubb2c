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

Cypress.Commands.add("fillCreditCardData", () => {
    cy.get("input[name='cardName']").type("Nome Impresso")
    cy.get("div[class='relative'] > img ~ input").type("4242424242424242")
    cy.get("input[placeholder='00']").type('01')
    cy.get("input[placeholder='0000']").type('2035')
    cy.get("input[placeholder='000']").type('123')
    //cy.get("button[role='combobox']").click()
    cy.get("select").select('1', { force: true })
})

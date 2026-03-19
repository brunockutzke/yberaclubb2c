/// <reference types="cypress" />

import locators from "../../support/locators/locators"

describe("Login", () => {

  it("Realizar login", () => {
    cy.env(['baseUrl', 'username', 'password']).then(({ baseUrl, username, password }) => {
        cy.visit(baseUrl)
        cy.get(locators.USER_INPUT).type(username)
        cy.get(locators.PASSWORD_INPUT).type(password)
        cy.get(locators.LOGIN_BTN).click()
        cy.get(locators.HOME_BTN)
    })
  })
})

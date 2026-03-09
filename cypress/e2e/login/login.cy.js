/// <reference types="cypress" />

import locators from "../../support/locators/locators"

describe("Login", () => {

  it("Realizar login", () => {
    cy.env(['baseUrl']).then(({ baseUrl }) => {
        cy.visit(baseUrl)
        cy.get("#user").type("pedromorisco")
        cy.get("#password").type("123456@")
        cy.get("#login-button-submit").click()
        cy.get("a[href='/home']")
    })
  })

  it("Fluxo de compra", () => {
    cy.env(['baseUrl', 'username', 'password']).then(({ baseUrl, username, password}) => {
        
        cy.login('pedromorisco', '123456@')

        cy.get("button[type='button']")
            .eq(1)
            .click()

        cy.get("div[role='dialog']")
            .should("be.visible")

        cy.get("a[href='/home']")
            .should("be.visible")

        cy.get("li[class='mb-4'] > div ~ div > div > div > div ~ span")
            .should("be.visible")
            .eq(2)
            .click({ force:true })

        cy.get("a[href='/lybera-shop']")
            .last()
            .click()

        cy.get("div[class='py-4']")
            .find('img')
            .first()
            .scrollIntoView()

        cy.contains("p", "Comprar agora")
            .first()
            .click()

        cy.get("div[role='none'] ~ div > div > div")
            .first()
            .should("be.visible")

        cy.get("img[alt='trophy mapa']")
            .first()
            .should("be.visible")

        cy.contains("p", "Fazer pedido")
            .click()

        cy.get("a[href='/lybera-shop/checkout/payment-method']")
            .last()
            .should("be.visible")

        cy.get("a[href='/lybera-shop/checkout/payment-method']")
            .last()
            .click()

        cy.get("a[href='/lybera-shop/checkout/payment-method/2']")
            .last()
            .should("be.visible")

        cy.get("a[href='/lybera-shop/checkout/payment-method/2']")
            .last()
            .click()

        cy.get("a[href='/lybera-shop/checkout/finalize-order']")
            .last()
            .should("be.visible")

        cy.get("a[href='/lybera-shop/checkout/finalize-order']")
            .last()
            .click()

        cy.get("div[class='flex'] > div > p ~ div ~ div ~ button")
            .last()
            .scrollIntoView()

        cy.get("div[class='flex'] > div > p ~ div ~ div ~ button")
            .last()
            .click()

        cy.get("img[alt='Check']")
            .siblings()
            .first()
            .should("have.text", "Pagamento Realizado com sucesso")
    })
  })
})

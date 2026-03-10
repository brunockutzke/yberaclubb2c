/// <reference types="cypress" />

import locators from "../../support/locators/locators"

describe("Purchase Flow", () => {

  it("Fluxo de compra - Pagamento com saldo global", () => {
    cy.env(['username', 'password']).then(({ username, password}) => {
        
        cy.login(username, password)

        cy.get("button[type='button']")
            .eq(1)
            .click()

        cy.get("div[role='dialog']")
            .should("be.visible")

        cy.get(locators.HOME_BTN)
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

  it.only("Fluxo de compra - Pagamento com cartão de crédito", () => {

    cy.env(['username', 'password']).then(({ username, password}) => {
        
        cy.login(username, password)

        cy.get("button[type='button']")
            .eq(1)
            .click()

        cy.get("div[role='dialog']")
            .should("be.visible")

        cy.get(locators.HOME_BTN)
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

        cy.get("a[href='/lybera-shop/checkout/payment-method/3']")
            .last()
            .should("be.visible")

        cy.get("a[href='/lybera-shop/checkout/payment-method/3']")
            .last()
            .click()

        cy.fillCreditCardData()

        /* cy.get("a[href='/lybera-shop/checkout/finalize-order']")
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
            .should("have.text", "Pagamento Realizado com sucesso") */
    })
  })
})

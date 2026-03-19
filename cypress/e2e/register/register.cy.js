/// <reference types="cypress" />

import locators from "../../support/locators/locators"

describe("Register", () => {

    it("Fluxo de cadastro", () => {

        const faker = require('faker-br')
        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()
        let email = faker.name.firstName() + "@mailinator.com"
        let user = "bruno" + faker.random.number()
        let influencerIndicationLink


        cy.env(['password', 'teamLeaderUsername']).then(({ password, teamLeaderUsername }) => {

            cy.login(teamLeaderUsername, password)

            cy.get("div[class='modal-footer'] > button")
                .first()
                .click()

            cy.get("button[aria-haspopup='dialog']")
                .last()
                .click()

            cy.get("#links-modal-input-text-professional")
                .then(influencerLink => {
                    influencerIndicationLink = influencerLink[0].value

                    cy.get("div[role='dialog'] > div ~ button")
                        .click()

                    cy.get("button[aria-haspopup='dialog']")
                        .first()
                        .click()

                    cy.get("button[aria-haspopup='menu']")
                        .last()
                        .click()
                    
                    cy.get("a[href='/']")
                        .click()

                    cy.visit(influencerIndicationLink)

                    cy.get(locators.REGISTER_FIRST_NAME).type(firstName)

                    cy.get(locators.REGISTER_LAST_NAME_INPUT).type(lastName)

                    cy.get(locators.REGISTER_USER_INPUT).type(user)

                    cy.get(locators.REGISTER_EMAIL_INPUT).type(email)

                    cy.get(locators.REGISTER_PASSWORD_INPUT).type(password, { log:false })

                    cy.get(locators.REGISTER_PASSWORD_CONFIRM_INPUT).type(password, { log:false })

                    cy.get(locators.REGISTER_SUBMIT_BTN).click()

                    cy.contains("h3", "Confirme seu e-mail!")
                })
        })
    })
})
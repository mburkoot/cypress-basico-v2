Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Melanny')
        cy.get('#lastName').type('Burkoot')
        cy.get('#email').type('melanny@teste.com')
        cy.get('#open-text-area').type('testando 1, 2, 3...')
        cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmit2', function(nome, sobrenome, email){
    cy.get('#firstName').type('Melanny')
        cy.get('#lastName').type('Burkoot')
        cy.get('#email').type('melanny@teste.com')
        cy.get('#open-text-area').type('testando 1, 2, 3...')
        cy.get('button[type="submit"]').click()
})


describe('Forms Builder', () => {
  it('Should load all necessary content',()=>{
    cy.login('user@gmail.com','usertest')
    cy.get('.drag-item').should('have.length',5)
    cy.get('#navbar button')
    cy.get('#expandButton')
  })
  it('Should logout when click on logout button', () => {
    cy.login('user@gmail.com','usertest')
    cy.get('#navbar button').click()
    cy.url().should('include','login')
  })
  it('Accordion should expand when click on expand button',()=>{
    cy.login('user@gmail.com','usertest')
    cy.get('#expandButton').click()
    cy.get('.accordion-item-body').eq(0).should('not.have.css','display','none')
  })
  it("Drop Area should changed",()=>{
    cy.login('user@gmail.com','usertest')
    cy.get('#expandButton').click()
    cy.get('.accordion-item #backgroundText').type(',well{enter}')
    cy.get('.drop-section #backgroundText').contains('Drop something here,well')
  })
})

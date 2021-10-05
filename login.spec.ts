<<<<<<< HEAD:cypress/integration/login.spec.ts
describe('Login', () => {
  it('Should not login if form is invalid', () => {
    cy.visit('/login');
    cy.url().should('includes', 'login');
    cy.get('input').eq(0).type('user@gmail.com');
    cy.get('button').click();
    cy.url().should('not.include', 'forms-builder');
  });
  it('Should login if form is valid', () => {
    cy.login('user@gmail.com', 'usertest');
  });
});
=======
describe('Login', () => {
  it('Should not login if form is invalid', () => {
    cy.visit('/login');
    cy.url().should("includes","login");
    cy.get("input").eq(0).type("user@gmail.com");
    cy.get("button").click();
    cy.url().should("not.include","forms-builder")
  })
  it('Should login if form is valid', () => {
    cy.login("user@gmail.com","usertest")
  })
})
>>>>>>> 2b441f217a0e0a74d8e2419cdcbeb50a1bcfd267:login.spec.ts

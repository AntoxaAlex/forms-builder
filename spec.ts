<<<<<<< HEAD:cypress/integration/spec.ts
describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Welcome');
    cy.contains('sandbox app is running!');
  });
});
=======
describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.contains('sandbox app is running!')
  })
})
>>>>>>> 2b441f217a0e0a74d8e2419cdcbeb50a1bcfd267:spec.ts

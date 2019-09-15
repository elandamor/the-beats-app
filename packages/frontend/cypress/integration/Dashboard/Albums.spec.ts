/// <reference types="Cypress" />

describe('Dashboard', () => {
  beforeEach(() => {
    before(function() {
      console.log(Cypress.env());
      // @ts-ignore - need to create definition file for this
      cy.login('mpofuthandolwethu@gmail.com', 'Pass123!');
      cy.wait(500);
      cy.visit(`${Cypress.env('localAppURL')}/dashboard`);
    });
  });

  it('renders correct appBarTitle', () => {
    cy.contains(/dashboard/i);
  });
});

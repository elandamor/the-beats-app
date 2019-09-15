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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Add testing library commands to Cypress
import '@testing-library/cypress/add-commands';
import { useAuthentication } from '../../src/hooks';

Cypress.Commands.add('login', (email, password) => {
  const Auth = useAuthentication();

  Auth.signIn(email, password)
    .then((result) => console.log('Cognito login success: ', result))
    .catch((error) => console.log('Cognito login failure: ', error));
});

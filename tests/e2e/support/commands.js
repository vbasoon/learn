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

Cypress.Commands.add("setLocalStorage", () => {
  cy.window().then((window) => {
    const token = {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmxhZCBCYXNvb24iLCJhZG1pbiI6InRydWUiLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTczODI0OTAzM30.A3M-By8SHfd6r3q-_tvjJhjHlc2T_M-WnSMXVTl6kGc",
    };
    window.localStorage.setItem("currentUser", JSON.stringify(token));
  });
});

describe("Test header component", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.setLocalStorage();
  });

  it("Test about page", () => {
    cy.visit("/about");
    cy.get('[data-test="about"]').click();
    cy.contains("h1", "This is an About page");
  });
  it("Test active link", () => {
    cy.get('[data-test="home"]').click();
    cy.get('[data-test="home"]').should("have.class", "router-link-active");
  });
  it("Test lang switch", () => {
    cy.get('[data-test="ua"]').click();
    cy.contains("[data-test='home']", "Головна");
  });
  it("Test logout button", () => {
    cy.get('[data-test="logout"]').click();
    cy.url().should("include", "/login");
  });
});

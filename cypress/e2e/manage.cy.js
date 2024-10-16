describe("Manage Component Tests", () => {
  beforeEach(() => {
    // Visit the Manage page
    cy.visit("/manage");
  });

  it("should render the form with the correct fields", () => {
    cy.get("h2#manage-heading").should("exist").and("contain", "Add a New Dog");

    // Check that all input fields are present
    cy.get('input[name="name"]').should("exist");
    cy.get('input[name="age"]').should("exist");
    cy.get('input[name="height"]').should("exist");
    cy.get('input[name="color"]').should("exist");
    cy.get('input[name="favoriteToy"]').should("exist");
    cy.get('input[name="favoriteMeal"]').should("exist");

    // Check the submit button
    cy.get(".submit-button").should("exist").and("contain", "Add Dog");
  });

  it("should allow input into the form fields", () => {
    cy.get('input[name="name"]')
      .type("Charlie")
      .should("have.value", "Charlie");
    cy.get('input[name="age"]').type("3").should("have.value", "3");
    cy.get('input[name="height"]')
      .type("24 inches")
      .should("have.value", "24 inches");
    cy.get('input[name="color"]').type("Golden").should("have.value", "Golden");
    cy.get('input[name="favoriteToy"]')
      .type("Ball")
      .should("have.value", "Ball");
    cy.get('input[name="favoriteMeal"]')
      .type("Chicken")
      .should("have.value", "Chicken");
  });

  it("should show an alert and reset the form upon submission", () => {
    const dogName = "Buddy";

    cy.get('input[name="name"]').type(dogName);
    cy.get('input[name="age"]').type("4");
    cy.get('input[name="height"]').type("30 inches");
    cy.get('input[name="color"]').type("Brown");
    cy.get('input[name="favoriteToy"]').type("Frisbee");
    cy.get('input[name="favoriteMeal"]').type("Beef");

    // Intercept the alert to assert it is called
    cy.window().then((win) => {
      cy.stub(win, "alert").as("alert");
    });

    cy.get(".submit-button").click();

    // Assert the alert was called with the correct message
    cy.get("@alert").should(
      "have.been.calledWith",
      `Dog name: ${dogName} was added successfully!`
    );

    // Check if the form fields are reset
    cy.get('input[name="name"]').should("have.value", "");
    cy.get('input[name="age"]').should("have.value", "");
    cy.get('input[name="height"]').should("have.value", "");
    cy.get('input[name="color"]').should("have.value", "");
    cy.get('input[name="favoriteToy"]').should("have.value", "");
    cy.get('input[name="favoriteMeal"]').should("have.value", "");
  });

  it("should display a random dog image", () => {
    cy.get(".dogs-form-image img")
      .should("exist")
      .and("have.attr", "alt", "A random dog image");
  });
});
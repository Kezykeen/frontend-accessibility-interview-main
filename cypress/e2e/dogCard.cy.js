describe("Dog Card Component Tests", () => {
  const dog = {
    id: 1,
    name: "Buddy",
    age: 3,
    picture: "https://http.dog/200.jpg",
    height: "24 inches",
    color: "Golden",
    favoritePortFeature: "Fetching Ball",
    favoriteMeal: "Chicken and Rice",
  };

  beforeEach(() => {
    // Visit the Home page where DogCard is rendered
    cy.visit("/");
  });

  it("should display the dog card with correct details", () => {
    cy.get(".dog-card")
      .first()
      .within(() => {
        // Check if the dog name is displayed correctly
        cy.get("h2").should("contain.text", dog.name);

        // Check if the dog image is displayed with the correct src
        cy.get("img.dog-image")
          .should("have.attr", "src", dog.picture)
          .and(
            "have.attr",
            "alt",
            `A picture of ${dog.name}, a ${dog.color} dog`
          );

        // Check if age is displayed correctly
        cy.get(".category")
          .contains("Age:")
          .siblings(".category-value")
          .should("contain.text", `${dog.age} years`);

        // Check if height is displayed correctly
        cy.get(".category")
          .contains("Height:")
          .siblings(".category-value")
          .should("contain.text", dog.height);

        // Check if color is displayed correctly
        cy.get(".category")
          .contains("Color:")
          .siblings(".category-value")
          .should("contain.text", dog.color);

        // Check if favorite feature is displayed correctly
        cy.get(".category")
          .contains("Favorite Feature:")
          .siblings(".category-value")
          .should("contain.text", dog.favoritePortFeature);

        // Check if favorite meal is displayed correctly
        cy.get(".category")
          .contains("Favorite Meal:")
          .siblings(".category-value")
          .should("contain.text", dog.favoriteMeal);
      });
  });

  it("should alert the dog’s name when the button is clicked", () => {
    cy.window().then((win) => {
      cy.stub(win, "alert").as("alert"); // Stub the alert function
    });

    cy.get(".dog-card")
      .first()
      .within(() => {
        cy.get(".dog-name-button").click(); // Click the alert button
      });

    cy.get("@alert").should(
      "have.been.calledWith",
      `Dog's name is ${dog.name}`
    ); // Check if alert is called with correct name
  });
});

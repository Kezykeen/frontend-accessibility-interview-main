describe("About Page Tests", () => {
  beforeEach(() => {
    cy.visit("/about");
  });

  it("should display the About heading", () => {
    cy.get("#about-heading").should("contain.text", "About This Website");
  });

  it("should display the description about accessibility", () => {
    cy.get(".about-container")
      .should("contain.text", "importance of accessibility in web development")
      .and(
        "contain.text",
        "enhance user experience for individuals with disabilities"
      );
  });

  it("should display helpful resources links", () => {
    const links = [
      {
        text: "Check color contrasts to ensure they meet the AA grade.",
        url: "https://webaim.org/resources/contrastchecker/",
      },
      {
        text: "A tool to help you pick hex colors.",
        url: "https://htmlcolorcodes.com/",
      },
      {
        text: "Chrome extension for navigating through landmarks.",
        url: "https://chromewebstore.google.com/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp",
      },
    ];

    links.forEach((link) => {
      cy.contains(link.text)
        .should("have.attr", "href", link.url)
        .and("have.attr", "target", "_blank");
    });
  });

  it("should display the feedback button and alert on click", () => {
    cy.get(".custom-button")
      .should("exist")
      .and("have.text", "Was this page helpful? Click here to let us know!");

    // Mock the alert to test without showing the dialog
    cy.window().then((win) => {
      cy.stub(win, "alert").as("alert");
    });

    cy.get(".custom-button").click();

    cy.get("@alert").should(
      "have.been.calledWith",
      "Thanks! Your feedback is important to us."
    );
  });
});

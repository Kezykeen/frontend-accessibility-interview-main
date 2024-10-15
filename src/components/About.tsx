import React from "react";
import "./About.css"; // Import the CSS for styling

const About: React.FC = () => {
  const handleClick = () => {
    alert("Thanks! Your feedback is important to us.");
  };

  return (
    <main className="about-container" aria-labelledby="about-heading">
      <h1 id="about-heading">About This Website</h1>
      <p>
        This website demonstrates the importance of accessibility in web
        development, with a focus on implementing features to enhance user
        experience for individuals with disabilities.
      </p>
      <h2>Helpful Resources</h2>

      <ul>
        <li>
          <a
            href="https://webaim.org/resources/contrastchecker/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            Link 1: Check color contrasts to ensure they meet the AA grade.
          </a>
        </li>
        <li>
          <a
            href="https://htmlcolorcodes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            Link 2: A tool to help you pick hex colors.
          </a>
        </li>
        <li>
          <a
            href="https://chromewebstore.google.com/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            Link 3: Chrome extension for navigating through landmarks.
          </a>
        </li>
      </ul>

      <div className="button-container">
        <button
          className="custom-button"
          onClick={handleClick}
          aria-label="Was this page helpful? Click here to let us know."
        >
          Was this page helpful? Click here to let us know!
        </button>
      </div>
    </main>
  );
};

export default About;

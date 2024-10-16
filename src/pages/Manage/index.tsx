import React, { useState } from "react";
import "./style.css"; // Import the CSS for styling
import AlertModal from "../../components/AlertModal";

const Manage = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [dogData, setDogData] = useState({
    name: "",
    age: "",
    height: "",
    color: "",
    favoriteToy: "",
    favoriteMeal: "",
  });

  const openAlert = () => setIsAlertOpen(true);
  const closeAlert = () => setIsAlertOpen(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDogData({ ...dogData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDogData({
      name: "",
      age: "",
      height: "",
      color: "",
      favoriteToy: "",
      favoriteMeal: "",
    });
  };

  return (
    <div className="manage-container">
      <h2 id="manage-heading">Add a New Dog</h2>
      <main>
        <form
          onSubmit={handleSubmit}
          className="dog-form"
          aria-labelledby="manage-heading"
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={dogData.name}
              onChange={handleChange}
              required
              placeholder="Charlie"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              id="age"
              type="number"
              name="age"
              value={dogData.age}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height:</label>
            <input
              id="height"
              type="text"
              name="height"
              value={dogData.height}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color:</label>
            <input
              id="color"
              type="text"
              name="color"
              value={dogData.color}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="favoriteToy">Favorite Toy:</label>
            <input
              id="favoriteToy"
              type="text"
              name="favoriteToy"
              value={dogData.favoriteToy}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="favoriteMeal">Favorite Meal:</label>
            <input
              id="favoriteMeal"
              type="text"
              name="favoriteMeal"
              value={dogData.favoriteMeal}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <button
            type="submit"
            className="submit-button"
            aria-label="Submit new dog details"
            onClick={openAlert}
          >
            Add Dog
          </button>
        </form>
      </main>

      <div
        className="dogs-form-image"
        tabIndex={0}
        role="img"
        aria-label="Random Dog Image"
      >
        <img
          src={`https://placedog.net/1000/300/random?id=128`}
          alt="A random dog image"
        />
      </div>
      <AlertModal
        isOpen={isAlertOpen}
        onClose={closeAlert}
        title="Dog Name"
        message={`Dog name: ${dogData.name} was added successfully!`}
      />
    </div>
  );
};

export default Manage;

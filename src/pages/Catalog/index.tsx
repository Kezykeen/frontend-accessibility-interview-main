import React, { useState } from "react";
import { dogs } from "../../components/data";
import { AlertModal, DogCard } from "../../components";
import "./style.css"; // Import the CSS for the catalog

const Catalog: React.FC = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [dogName, setDogName] = useState("");

  const closeAlert = () => setIsAlertOpen(false);

  const clickHandler = (name: string) => {
    setDogName(name);
    setIsAlertOpen(true);
  };

  return (
    <main className="catalog" aria-labelledby="catalog-heading">
      <h1 id="catalog-heading">Dog Catalog</h1>
      <section className="dog-cards-container" role="list">
        {dogs.map((dog, index) => (
          <DogCard key={index} {...dog} clickHandler={clickHandler} />
        ))}
      </section>
      <AlertModal
        isOpen={isAlertOpen}
        onClose={closeAlert}
        title="Dog Name"
        message={`Dog's name is ${dogName}`}
      />
    </main>
  );
};

export default Catalog;

import React from "react";
import "./style.css";

interface DogCardProps {
  id: number;
  name: string;
  age: number;
  picture: string;
  height: string;
  color: string;
  favoritePortFeature: string;
  favoriteMeal: string;
  clickHandler: (name: string) => void;
}

const DogCard: React.FC<DogCardProps> = ({
  id,
  name,
  age,
  height,
  picture,
  color,
  favoritePortFeature,
  favoriteMeal,
  clickHandler,
}) => {
  return (
    <article
      className="dog-card"
      role="listitem"
      aria-labelledby={`dog-name-${id}`}
      aria-describedby={`dog-info-${id}`}
    >
      <img
        src={picture}
        alt={`A dog named ${name} that is ${color} in color.`}
        className="dog-image"
      />
      <h2 id={`dog-name-${id}`}>{name}</h2>
      <div id={`dog-info-${id}`}>
        <div className="category">
          <p className="category-label">ID:</p>
          <p className="category-value">{id}</p>
        </div>
        <div className="category">
          <p className="category-label">Age:</p>
          <p className="category-value">{age} years</p>
        </div>
        <div className="category">
          <p className="category-label">Height:</p>
          <p className="category-value">{height}</p>
        </div>
        <div className="category">
          <p className="category-label">Color:</p>
          <p className="category-value">{color}</p>
        </div>
        <div className="category">
          <p className="category-label">Favorite Feature:</p>
          <p className="category-value">{favoritePortFeature}</p>
        </div>
        <div className="category">
          <p className="category-label">Favorite Meal:</p>
          <p className="category-value">{favoriteMeal}</p>
        </div>
      </div>

      <button
        className="dog-name-button"
        onClick={() => clickHandler(name)}
        aria-label={`Alert the name of the dog, which is ${name}`}
      >
        Reveal Dog's Name
      </button>
    </article>
  );
};

export default DogCard;

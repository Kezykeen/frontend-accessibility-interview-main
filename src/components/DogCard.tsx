import React from 'react';
import './DogCard.css';

interface DogCardProps {
  id: number; // Add id prop
  name: string;
  age: number;
  height: string;
  color: string;
  favoritePortFeature: string;
  favoriteMeal: string;
}

const DogCard: React.FC<DogCardProps> = ({ 
    id, 
    name, 
    age, 
    height, 
    color, 
    favoritePortFeature, 
    favoriteMeal 
}) => {

  // Function to handle the alert
  const showAlert = () => {
    alert(`Dog's name is ${name}`);
  };

  return (
    <div className="dog-card" key={id}>
      <img 
        src={`https://placedog.net/400/400/random?id=${id}`}
        className="dog-image" 
      />
      <h3>{name}</h3>
      <div>
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

      <div className="dog-name-button" onClick={showAlert}>
        Click here to alert the dog's name
      </div>
    </div>
  );
};

export default DogCard;

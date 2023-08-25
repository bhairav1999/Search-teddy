import React from "react";

const NewCard = ({
  setIsOpen,
  isOpen,
  newCard,
  setNewCard,
  setcardData,
  carData,
}) => {
  const newDataAdd = () => {
    if (newCard.name && newCard.age && newCard.city) {
      setcardData([...carData, newCard]);
      setNewCard({
        name: "",
        age: "",
        city: "",
      });
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={newCard.name}
        onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Age"
        value={newCard.age}
        onChange={(e) => setNewCard({ ...newCard, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={newCard.city}
        onChange={(e) => setNewCard({ ...newCard, city: e.target.value })}
      />
      <button onClick={newDataAdd}>add</button>
    </div>
  );
};

export default NewCard;

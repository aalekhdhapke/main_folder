import React, { useState } from "react";
import "./withoutstate.css";

export default function WithoutState() {
  const [selectedFruit, setSelectedFruit] = useState("apple");

  const fruitImages = {
    apple: "https://static.vecteezy.com/system/resources/thumbnails/039/621/524/small_2x/ai-generated-freshness-and-nature-drop-dew-on-juicy-ripe-apples-generated-by-ai-photo.jpg",
    banana: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0xB8C9wqjqPXGUdXjGDxupJt2OIDCOTh6A&s",
    mango: "https://media.istockphoto.com/id/1352881713/photo/mango-fruit-with-drops-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xNgofvhPOsksKtOMK9sbvQ2qZpMS6WQ3UC6Omv7g8-0="
  };

  const onSelectChange = (event) => {
    console.log("Fruit selected:", event.target.value);
    setSelectedFruit(event.target.value);
  };

  return (
    <div>
      <h1>Select a fruit</h1>

      <select onChange={onSelectChange}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="mango">Mango</option>
      </select>

      <h2>You selected {selectedFruit}</h2>

      <img
        src={fruitImages[selectedFruit]}
        alt={selectedFruit}
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  );
}

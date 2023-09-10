import React, { useState } from "react";

function CurrentActivities() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const activities = {
    learning: " GameMaker Studio",
    reading: " \"The Seven Husbands of Evelyn Hugo\" by Taylor Jenkins Reid",
    playing: " Common'hood",
    collaborating: " on a Web Development project",
  };

  return (
    <div className="current-activities">
      <p>
        Currently I am {selectedOption ? `${selectedOption}${activities[selectedOption]}` : "Select an option"}
        <span className="dropdown-arrow" onClick={() => setIsOpen(!isOpen)}>
          &#9660;
        </span>
      </p>
      {isOpen && (
        <ul className="dropdown-options">
          {Object.keys(activities).map((option) => (
            <li
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={selectedOption === option ? "selected" : ""}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CurrentActivities;
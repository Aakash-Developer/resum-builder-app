import React, { useState } from "react";

const HobbiesForm = () => {
  const [hobbyName, setHobbyName] = useState("");
  const [hobbiesList, setHobbiesList] = useState([]);
  const [editedIndex, setEditedIndex] = useState(-1); // Index of the hobby being edited

  const handleAddHobby = () => {
    if (hobbyName.trim() === "") {
      return;
    }

    if (editedIndex === -1) {
      setHobbiesList((prevHobbiesList) => [...prevHobbiesList, hobbyName]);
    } else {
      // Update the hobby at the edited index
      const updatedHobbiesList = hobbiesList.map((hobby, index) => (index === editedIndex ? hobbyName : hobby));
      setHobbiesList(updatedHobbiesList);
      setEditedIndex(-1); // Reset the edited index
    }

    setHobbyName("");
  };

  const handleEditHobby = (index) => {
    setHobbyName(hobbiesList[index]);
    setEditedIndex(index);
  };

  const handleDeleteHobby = (index) => {
    const updatedHobbiesList = hobbiesList.filter((_, idx) => idx !== index);
    setHobbiesList(updatedHobbiesList);
  };

  return (
    <div className="max-w-5xl mx-auto my-8">
      <div className="p-3 border rounded-md">
        <div className="flex gap-0 flex-col md:flex-row md:gap-3">
          <div className="w-full">
            <input type="text" placeholder="Hobby Name" value={hobbyName} onChange={(e) => setHobbyName(e.target.value)} className="border rounded-md p-2 w-full" />
          </div>
        </div>

        <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-md mt-3" onClick={handleAddHobby}>
          {editedIndex === -1 ? "Add" : "Save"}
        </button>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Hobbies List:</h3>
          <ul>
            {hobbiesList.map((hobby, index) => (
              <li key={index} className="mb-1" onClick={() => handleEditHobby(index)}>
                {hobby}
                <div className="mt-1">
                  <button type="button" className="px-2 py-1 bg-red-500 text-white rounded-md" onClick={() => handleDeleteHobby(index)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HobbiesForm;

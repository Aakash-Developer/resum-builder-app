import React, { useState } from "react";

const LanguageForm = () => {
  const initialLanguageData = {
    language: "",
    level: 0,
  };

  const [languageData, setLanguageData] = useState(initialLanguageData);
  const [languagesList, setLanguagesList] = useState([]);
  const [editedIndex, setEditedIndex] = useState(-1); // Index of the language being edited

  const handleInputChange = (name, value) => {
    setLanguageData((prevLanguageData) => ({
      ...prevLanguageData,
      [name]: value,
    }));
  };

  const handleLevelChange = (event) => {
    const newLevel = parseInt(event.target.value);
    handleInputChange("level", newLevel);
  };

  const handleAddLanguage = () => {
    if (languageData.language.trim() === "") {
      return;
    }

    if (editedIndex === -1) {
      setLanguagesList((prevLanguagesList) => [...prevLanguagesList, languageData]);
    } else {
      // Update the language at the edited index
      const updatedLanguagesList = languagesList.map((language, index) => (index === editedIndex ? languageData : language));
      setLanguagesList(updatedLanguagesList);
      setEditedIndex(-1); // Reset the edited index
    }

    setLanguageData(initialLanguageData);
  };

  const handleEditLanguage = (index) => {
    const languageToEdit = languagesList[index];
    setLanguageData(languageToEdit);
    setEditedIndex(index);
  };

  const handleDeleteLanguage = (index) => {
    const updatedLanguagesList = languagesList.filter((_, idx) => idx !== index);
    setLanguagesList(updatedLanguagesList);
  };

  return (
    <div className="max-w-5xl mx-auto my-8">
      <div className="p-3 border rounded-md">
        <div className="flex gap-0 flex-col md:flex-row md:gap-3">
          <div className="w-full md:w-2/3">
            <input
              type="text"
              name="language"
              placeholder="Language"
              value={languageData.language}
              onChange={(e) => handleInputChange("language", e.target.value)}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/3">
            <input type="range" name="level" min="0" max="5" value={languageData.level} onChange={handleLevelChange} className="w-full" />
            <div className="text-center">{languageData.level}</div>
          </div>
        </div>

        <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-md mt-3" onClick={handleAddLanguage}>
          {editedIndex === -1 ? "Add" : "Save"}
        </button>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Languages List:</h3>
          <ul>
            {languagesList.map((language, index) => (
              <li key={index} className="mb-1">
                <strong>{language.language}</strong> - Level: {language.level}
                <div className="mt-1">
                  <button type="button" className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2" onClick={() => handleEditLanguage(index)}>
                    Edit
                  </button>
                  <button type="button" className="px-2 py-1 bg-red-500 text-white rounded-md" onClick={() => handleDeleteLanguage(index)}>
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

export default LanguageForm;

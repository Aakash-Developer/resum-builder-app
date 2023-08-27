import React, { useState } from "react";

const SkillsForm = () => {
  const initialSkillData = {
    skillName: "",
    level: 0,
  };

  const [skillData, setSkillData] = useState(initialSkillData);
  const [skillsList, setSkillsList] = useState([]);
  const [editedIndex, setEditedIndex] = useState(-1); // Index of the skill being edited

  const handleInputChange = (name, value) => {
    setSkillData((prevSkillData) => ({
      ...prevSkillData,
      [name]: value,
    }));
  };

  const handleLevelChange = (event) => {
    const newLevel = parseInt(event.target.value);
    handleInputChange("level", newLevel);
  };

  const handleAddSkill = () => {
    if (skillData.skillName.trim() === "") {
      return;
    }

    if (editedIndex === -1) {
      setSkillsList((prevSkillsList) => [...prevSkillsList, skillData]);
    } else {
      // Update the skill at the edited index
      const updatedSkillsList = skillsList.map((skill, index) => (index === editedIndex ? skillData : skill));
      setSkillsList(updatedSkillsList);
      setEditedIndex(-1); // Reset the edited index
    }

    setSkillData(initialSkillData);
  };

  const handleEditSkill = (index) => {
    const skillToEdit = skillsList[index];
    setSkillData(skillToEdit);
    setEditedIndex(index);
  };

  const handleDeleteSkill = (index) => {
    const updatedSkillsList = skillsList.filter((_, idx) => idx !== index);
    setSkillsList(updatedSkillsList);
  };

  return (
    <div className="max-w-5xl mx-auto my-8">
      <div className="p-3 border rounded-md">
        <div className="flex gap-0 flex-col md:flex-row md:gap-3">
          <div className="w-full md:w-2/3">
            <input
              type="text"
              name="skillName"
              placeholder="Skill Name"
              value={skillData.skillName}
              onChange={(e) => handleInputChange("skillName", e.target.value)}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/3">
            <input type="range" name="level" min="0" max="5" value={skillData.level} onChange={handleLevelChange} className="w-full" />
            <div className="text-center">{skillData.level}</div>
          </div>
        </div>

        <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-md mt-3" onClick={handleAddSkill}>
          {editedIndex === -1 ? "Add" : "Save"}
        </button>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Skills List:</h3>
          <ul>
            {skillsList.map((skill, index) => (
              <li key={index} className="mb-1">
                <strong>{skill.skillName}</strong> - Level: {skill.level}
                <div className="mt-1">
                  <button type="button" className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2" onClick={() => handleEditSkill(index)}>
                    Edit
                  </button>
                  <button type="button" className="px-2 py-1 bg-red-500 text-white rounded-md" onClick={() => handleDeleteSkill(index)}>
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

export default SkillsForm;

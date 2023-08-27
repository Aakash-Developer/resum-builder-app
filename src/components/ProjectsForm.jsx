import React, { useState } from "react";

const ProjectsForm = () => {
  const initialProjectData = {
    projectName: "",
    projectDescription: "",
  };

  const [projectData, setProjectData] = useState(initialProjectData);
  const [projectsList, setProjectsList] = useState([]);
  const [editedIndex, setEditedIndex] = useState(-1); // Index of the project being edited

  const handleInputChange = (name, value) => {
    setProjectData((prevProjectData) => ({
      ...prevProjectData,
      [name]: value,
    }));
  };

  const handleAddProject = () => {
    if (projectData.projectName.trim() === "") {
      return;
    }

    if (editedIndex === -1) {
      setProjectsList((prevProjectsList) => [...prevProjectsList, projectData]);
    } else {
      // Update the project at the edited index
      const updatedProjectsList = projectsList.map((project, index) => (index === editedIndex ? projectData : project));
      setProjectsList(updatedProjectsList);
      setEditedIndex(-1); // Reset the edited index
    }

    setProjectData(initialProjectData);
  };

  const handleEditProject = (index) => {
    const projectToEdit = projectsList[index];
    setProjectData(projectToEdit);
    setEditedIndex(index);
  };

  const handleDeleteProject = (index) => {
    const updatedProjectsList = projectsList.filter((_, idx) => idx !== index);
    setProjectsList(updatedProjectsList);
  };

  return (
    <div className="max-w-5xl mx-auto my-8">
      <div className="p-3 border rounded-md">
        <div className="flex gap-0 flex-col md:flex-row md:gap-3">
          <div className="w-full">
            <input
              type="text"
              name="projectName"
              placeholder="Project Name"
              value={projectData.projectName}
              onChange={(e) => handleInputChange("projectName", e.target.value)}
              className="border rounded-md p-2 w-full"
            />
          </div>
        </div>

        <div className="mt-3">
          <textarea
            name="projectDescription"
            placeholder="Project Description"
            rows="4"
            value={projectData.projectDescription}
            onChange={(e) => handleInputChange("projectDescription", e.target.value)}
            className="border rounded-md p-2 w-full"
          />
        </div>

        <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-md mt-3" onClick={handleAddProject}>
          {editedIndex === -1 ? "Add" : "Save"}
        </button>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Projects List:</h3>
          <ul>
            {projectsList.map((project, index) => (
              <li key={index} className="mb-3">
                <strong>{project.projectName}</strong>
                <p>{project.projectDescription}</p>
                <div className="mt-2">
                  <button type="button" className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2" onClick={() => handleEditProject(index)}>
                    Edit
                  </button>
                  <button type="button" className="px-2 py-1 bg-red-500 text-white rounded-md" onClick={() => handleDeleteProject(index)}>
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

export default ProjectsForm;

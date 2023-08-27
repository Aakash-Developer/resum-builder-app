import React from "react";
import ProfileFrom from "../components/ProfileFrom";
import EductionFrom from "../components/EducationFrom";
import EmploymentForm from "../components/EmploymentForm";
import SkillsForm from "../components/SkillsForm";
import LanguageForm from "../components/LanguageForm";
import HobbiesForm from "../components/HobbiesForm";
import ProjectsForm from "../components/ProjectsForm";
import Button from "../smallComponents/Button";
import PDFDownloadButton from "../smallComponents/PDFDownloadButton";
import HTMLCanvasViewer from "../components/HtmlCanvas/HTMLCanvasViewer";

function Resume() {
  const hadleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <ProfileFrom />
      <EductionFrom />
      <EmploymentForm />
      <SkillsForm />
      <LanguageForm />
      <HobbiesForm />
      <ProjectsForm />
      <Button label="Preview" onClick={hadleClick} />
      <HTMLCanvasViewer htmlContent={<ProfileFrom />} />
    </>
  );
}

export default Resume;

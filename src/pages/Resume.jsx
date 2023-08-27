import { useEffect } from "react";
import ProfileFrom from "../components/ProfileFrom";
import EductionFrom from "../components/EducationFrom";
import EmploymentForm from "../components/EmploymentForm";
import SkillsForm from "../components/SkillsForm";
import LanguageForm from "../components/LanguageForm";
import HobbiesForm from "../components/HobbiesForm";
import ProjectsForm from "../components/ProjectsForm";
import Button from "../smallComponents/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchResumeData, addEducation, updateEducation, deleteEducation } from "../store/resumeSlice";
import HTMLCanvasViewer from "../components/HtmlCanvas/HTMLCanvasViewer";
import EmploymentCard from "../smallComponents/EmploymentCard";

function Resume() {
  const educations = useSelector((state) => state.resume.educations);
  const loading = useSelector((state) => state.resume.loading);
  const error = useSelector((state) => state.resume.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResumeData());
  }, [dispatch]);

  const handleAddEducation = (education) => {
    dispatch(addEducation(education));
  };

  const handleUpdateEducation = (index, updatedEducation) => {
    dispatch(updateEducation(index, updatedEducation));
  };

  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };

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
      <EmploymentCard
      // Implement your edit logic
      />
    </>
  );
}

export default Resume;

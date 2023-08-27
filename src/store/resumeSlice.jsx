// resumeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchData, insertData, updateData, deleteData } from "./Apis";

const initialState = {
  educations: [],
  employmentsHistory: [],
  hobbies: [],
  languages: [],
  profileDetails: {},
  skills: [],
  projects: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addEducation(state, action) {
      state.educations.push(action.payload);
    },
    updateEducation(state, action) {
      const { index, updatedEducation } = action.payload;
      state.educations[index] = updatedEducation;
    },
    deleteEducation(state, action) {
      state.educations.splice(action.payload, 1);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { addEducation, updateEducation, deleteEducation, setLoading, setError } = resumeSlice.actions;

export const insertEducation = (education) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await insertData("/education", education);
    dispatch(fetchResumeData()); // Fetch updated data after insertion
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};

export const educationUpdate = (index, updatedEducation) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await updateData("/education", index, updatedEducation);
    dispatch(fetchResumeData()); // Fetch updated data after update
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};

export const EducationDelete = (index) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await deleteData("/education", index);
    dispatch(fetchResumeData()); // Fetch updated data after deletion
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};

export const fetchResumeData = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const data = await fetchData("products"); // Update with your endpoint
    // dispatch(addEducation(data.educations));
    // dispatch(setEmploymentsHistory(data.employmentsHistory));
    // ... dispatch other set actions ...
    console.log(data);
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export default resumeSlice.reducer;

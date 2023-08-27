import { configureStore } from "@reduxjs/toolkit";
import ExistingUserSlice from "./ExistingUserSlice";
import resumeSlice from "./resumeSlice";

const Store = configureStore({
  reducer: {
    userinfo: ExistingUserSlice,
    resume: resumeSlice,
  },
});

export default Store;

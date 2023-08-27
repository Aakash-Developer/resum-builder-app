import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    u_id: null,
    selectedTemplate: {
      templateCode: "001",
      color: "",
    },
  },
};

const ExistingUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Template actions
    setUserId(state, action) {
      const { u_id } = action.payload;
      state.user.u_id = u_id;
    },
    setTemplate(state, action) {
      const { color, templateCode } = action.payload;
      state.selectedTemplate.templateCode = templateCode;
      state.selectedTemplate.color = color;
    },
  },
});

export const { setUserId, setTemplate } = ExistingUserSlice.actions;
export default ExistingUserSlice.reducer;

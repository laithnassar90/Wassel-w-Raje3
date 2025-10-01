import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
 

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    // trips: tripsReducer, // This is commented out because tripsReducer is not defined
  },
  devTools: import.meta.env.MODE === "development",
});

// ✅ Types for typed hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

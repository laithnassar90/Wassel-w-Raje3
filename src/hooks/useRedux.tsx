<<<<<<< HEAD
// src/hooks/useRedux.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/configureStore";

// Typed versions of Redux hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
=======
// src/hooks/useRedux.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/configureStore";

// Typed versions of Redux hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
>>>>>>> 6090fceb (Initial commit of all components)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
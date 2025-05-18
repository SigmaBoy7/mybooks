//Redux typed hooks
// eslint-disable-next-line boundaries/element-types
import type { AppDispatch, AppState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const createAppSelector = createSelector.withTypes<AppState>();

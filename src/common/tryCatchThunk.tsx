import {BaseThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {AppDispatch, AppRootStateType} from "state/store";
import {AxiosError, isAxiosError} from "axios";



export const thunkTryCatch = async (
    thunkAPI: BaseThunkAPI<AppRootStateType, any, AppDispatch, unknown>,
    logic: Function,
    showGlobalError: boolean = true
) => {
    const { rejectWithValue } = thunkAPI;
    try {
        return await logic();
    } catch (e) {
        return rejectWithValue({ e, showGlobalError });
    }
};

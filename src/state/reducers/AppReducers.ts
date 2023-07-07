


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AxiosError, isAxiosError} from "axios";


const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false,
    isLoading: true,
}

export type AppInitialStateType = typeof initialState
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error
        },
        setAppStatus: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
            state.status = action.payload.status
        },
        setAppInitialized: (state, action: PayloadAction<{isInitialized: boolean}>) => {
            state.isInitialized = action.payload.isInitialized
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.isLoading = false;
                    if (!action.payload.showGlobalError) return;
                    const err = action.payload.e as Error | AxiosError<{ error: string }>;
                    if (isAxiosError(err)) {
                        state.error = err.response ? err.response.data.error : err.message;
                    } else {
                        state.error = `Native error ${err.message}`;
                    }
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/fulfilled"),
                (state) => {

                    state.isLoading = false;

                }
            ).addDefaultCase((state, action) => {
            console.log("addDefaultCase 🚀", action.type);
        });
    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "features/user/redux/user.slice";
import { bookApi } from "features/book/redux/book.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

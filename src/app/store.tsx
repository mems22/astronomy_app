import { configureStore } from "@reduxjs/toolkit";
import solarSystemReducer from "@features/SolarSystem/SolarSystemSlice";

export const store = configureStore({
  reducer: {
    solarSystem: solarSystemReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

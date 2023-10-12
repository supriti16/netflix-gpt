import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import moviesReducer from "./slice/movieSlice";
import gptReducer from "./slice/gptSlice";
import appConfigReducer from "./slice/appConfigSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    appConfig: appConfigReducer,
  },
});
export default appStore;

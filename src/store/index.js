import { configureStore } from "@reduxjs/toolkit";
import recommendReducer from "@/pages/discover/c-pages/recommend/store/recommend";
import playerReducer from "@/pages/player/store/player";

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer
  }
})

export default store
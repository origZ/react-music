import { configureStore } from "@reduxjs/toolkit";
import recommendReducer from "@/pages/discover/c-pages/recommend/store/recommend"

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})

export default store
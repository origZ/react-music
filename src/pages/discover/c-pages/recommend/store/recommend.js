import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBanners, getHotRecommends} from "../service/recommend";

// 异步请求函数
export const fetchRecommendData = createAsyncThunk('recommendData', (arg,{ dispatch }) => {
  getBanners().then((res) =>{dispatch(changeBanners(res.banners))})
  getHotRecommends(8).then((res) =>{dispatch(changeHotRecommends(res.result))})
})

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    banners: [],
    hotRecommends:[],
  },

  reducers: {
    changeBanners(state, {payload}) {
      state.banners = payload
    },
    changeHotRecommends(state, {payload}) {
      state.hotRecommends = payload
    },
    
  }
})

export default recommendSlice.reducer
export const { changeBanners, changeHotRecommends} = recommendSlice.actions
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBanners, getHotRecommends, getNewAlbums} from "../service/recommend";

// 异步请求函数
export const fetchRecommendData = createAsyncThunk('recommendData', (arg,{ dispatch }) => {
  getBanners().then((res) =>{dispatch(changeBanners(res.banners))})
  getHotRecommends(8).then((res) =>{dispatch(changeHotRecommends(res.result))})
  getNewAlbums().then((res) => {dispatch(changeNewAlbums(res.albums))})
})

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    banners: [],
    hotRecommends:[],
    newAlbums: [],
  },

  reducers: {
    changeBanners(state, {payload}) {
      state.banners = payload
    },
    changeHotRecommends(state, {payload}) {
      state.hotRecommends = payload
    },
    changeNewAlbums(state, {payload}) {
      state.newAlbums = payload
    },
  }
})

export const { changeBanners, changeHotRecommends, changeNewAlbums} = recommendSlice.actions
export default recommendSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getArtistList, getBanners, getHotRecommends, getNewAlbums, getRankings} from "../service/recommend";

// 异步请求函数
export const fetchRecommendData = createAsyncThunk('recommendData', (arg,{ dispatch }) => {
  getBanners().then((res) =>{dispatch(changeBanners(res.banners))})
  getHotRecommends(8).then((res) =>{dispatch(changeHotRecommends(res.result))})
  getNewAlbums().then((res) => {dispatch(changeNewAlbums(res.albums))})
  getArtistList(5).then((res) => {dispatch(changeArtistList(res.artists))})
})

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingData = createAsyncThunk('rankdata', (arg, {dispatch}) => {
  const rankinglist = []
  for (const id of rankingIds) {
    rankinglist.push(getRankings(id))
  }
  Promise.all(rankinglist).then((res) => {
    const playlists = res.map((item) => item.playlist)
    dispatch(changeRankings(playlists))
  })
})

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    banners: [],
    hotRecommends:[],
    newAlbums: [],
    rankings: [],
    artistList: [],
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
    changeRankings(state, {payload}) {
      state.rankings = payload
    },
    changeArtistList(state, {payload}) {
      state.artistList = payload
    },
  }
})

export const { changeBanners, changeHotRecommends, changeNewAlbums, changeRankings, changeArtistList} = recommendSlice.actions
export default recommendSlice.reducer
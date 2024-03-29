import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSongDetail } from "../service/player";

export const fetchCurrentSongAction = createAsyncThunk('currentSong', (id, {dispatch,getState }) => {
  // 从列表获取歌曲
  const playSongList = getState().player.playSongList
  const findIndex = playSongList.findIndex((item) => item.id === id)
  // 没有找到相同歌曲
  if (findIndex === -1) {
    getSongDetail(id).then((res) => {
      const song = res.songs[0]
      const newPlaySongList = [...playSongList]
      newPlaySongList.push(song)
      dispatch(changeCurrentSong(res.songs[0]))
      dispatch(changePlaySongList(newPlaySongList))
      dispatch(changePlaySongIndex(newPlaySongList.length -1))
    })
  }else {
    // 找到相同的
    const song = playSongList[findIndex]
    dispatch(changeCurrentSong(song))
    dispatch(changePlaySongIndex(findIndex))
  }
})

export const fetchChangeMusicAction = createAsyncThunk('changeMusic', (isNext, {dispatch, getState}) => {
  const player = getState().player
  const playMode = player.playMode
  const songIndex = player.playSongIndex
  const songList = player.playSongList
  
  // 不同播放模式的索引
  let newIndex = songIndex
  if (playMode === 1) {
    newIndex = Math.floor(Math.random() * songList.length)
    if (newIndex === songIndex) {
      newIndex = Math.floor(Math.random() * songList.length)
    }
  }else {
    newIndex = isNext ? songIndex + 1 : songIndex -1
    if (newIndex >songList.length -1) newIndex = 0
    if (newIndex < 0) newIndex = songList.length - 1
  }

  const song = songList[newIndex]
  dispatch(changeCurrentSong(song))
  dispatch(changePlaySongIndex(newIndex))
})

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    playMode: 0,
    currentSong: {},
    playSongList: [],
    playSongIndex: -1, // 0:顺序播放 1:随机播放 2:单曲循环
  },

  reducers: {
    changePlayModeAction(state, {payload}) {
      state.playMode = payload
    },
    changeCurrentSong(state, {payload}) {
      state.currentSong = payload
    },
    changePlaySongList(state, {payload}) {
      state.playSongList = payload
    },
    changePlaySongIndex(state, {payload}) {
      state.playSongIndex = payload
    },

  }
})

export const { changePlayModeAction, changeCurrentSong, changePlaySongList, changePlaySongIndex} = playerSlice.actions
export default playerSlice.reducer
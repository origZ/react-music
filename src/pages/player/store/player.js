import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSongDetail } from "../service/player";

export const fetchCurrentSongAction = createAsyncThunk('currentSong', (id, {dispatch, }) => {
  getSongDetail(id).then((res) => {
    dispatch(changeCurrentSong(res.songs[0]))
  })
})

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    playMode: 0,
    currentSong: {},
    lyrics: [],
    lyricIndex: -1,
    playSongList: [],
    playSongIndex: -1,
  },

  reducers: {
    changePlayModeAction(state, {payload}) {
      state.playMode = payload
    },
    changeCurrentSong(state, {payload}) {
      state.currentSong = payload
    },

  }
})

export const { changePlayModeAction, changeCurrentSong, } = playerSlice.actions
export default playerSlice.reducer
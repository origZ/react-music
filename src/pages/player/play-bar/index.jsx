import React, { memo, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Control, Operator, PlayBarWrapper, PlayInfo } from './style'
import { Slider } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { formatImageUrl, formatTime, getSongPlayUrl} from '@/utils/format'
import { changePlayModeAction, fetchChangeMusicAction } from '../store/player'

const PlayBar = memo(() => {
  // 记录内部状态
  const [isPlaying,setIsPlaying ] = useState(false)  // 播放状态
  const [progress, setProgress] = useState(0)  // 播放进度
  const [duration, setDuration] = useState(0)  // 播放总时长
  const [currentTime, setCurrentTime] = useState(0)  // 当前播放时间
  const [isSliding, setIsSliding] = useState(false)  // 记录滑动状态

  const dispatch = useDispatch()

  // 获取audio元素
  const audioRef = useRef()
  

  // 从store中获取数据
  const { playMode, currentSong, } = useSelector((state) => ({
    playMode: state.player.playMode,
    currentSong: state.player.currentSong,
    
  }),shallowEqual)

  // 副作用代码
  useEffect(() =>{
    // 播放音乐
    audioRef.current.src = getSongPlayUrl(currentSong.id)
    audioRef.current
      ?.play().then(() => setIsPlaying(true))
       .catch(() => setIsPlaying(false))
    // 获取播放总时长
    setDuration(currentSong?.dt)
  },[currentSong])

  // 控制播放器的播放/暂停
  function handlePlayClick() {
    isPlaying ? audioRef.current?.pause() 
              : audioRef.current.play().catch(() => setIsPlaying(false))
    setIsPlaying(!isPlaying)
  }

  // 音乐播放进度处理
  function handleTimeUpdate() {
    // 获取当前播放时间
    const currentTime = audioRef.current.currentTime * 1000
    // 设置歌曲进度
    if(!isSliding) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }
  }

  // 进度条拖拽处理
  function handleSliderChanging(value) {
    // 正在进行拖拽
    setIsSliding(true)
    // 根据拖拽的值设置进度
    setProgress(value)
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }
  // 拖拽完成处理
  function handleSliderChanged(value) {
    // 获取点击/滑动位置的时间
    const currentTime = (value / 100) * duration
    // 设置当前播放时间
    audioRef.current.currentTime = currentTime / 1000
    setCurrentTime(currentTime)
    setProgress(value)
    setIsSliding(false)
  }

  // 控制上一曲/下一曲
  function handleChangeMusic(isNext = true) {
    dispatch(fetchChangeMusicAction(isNext))
  }
  // 控制播放模式
  function handlePlayMode() {
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changePlayModeAction(newPlayMode))
  }
  // 音乐结束的处理
  function handleTimeEnded() {
    if (playMode === 2) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }else {
      handleChangeMusic()
    }
  }

  return (
    <PlayBarWrapper className="sprite_playbar">
      <div className="content wrapper02">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar btn prev" onClick={()=>handleChangeMusic(false)}></button>
          <button className="sprite_playbar btn play" onClick={handlePlayClick}></button>
          <button className="sprite_playbar btn next" onClick={()=>handleChangeMusic()}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/player">
              <img src={Object.keys(currentSong).length !== 0 ? formatImageUrl(currentSong?.al?.picUrl, 34) : "http://s4.music.126.net/style/web2/img/default/default_album.jpg"} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className='song-name'>{currentSong.name}</span>
              <span className='singer-name'>{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider 
                tooltip={{ formatter: null }} 
                step={0.5} 
                value={progress} 
                onChange={handleSliderChanging} 
                onChangeComplete={handleSliderChanged}/>
              <div className="time">
                <span className='now-time'>{formatTime(currentTime)}</span>
                <span className='divider'>/</span>
                <span className='total-time'>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator playMode={playMode}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn playmode" onClick={handlePlayMode}></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleTimeEnded}/>
    </PlayBarWrapper>
  )
})

export default PlayBar
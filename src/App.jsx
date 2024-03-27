import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import PlayBar from './pages/player/play-bar'

const App = memo(() => {
  return (
    <div>
      <AppHeader/>
      <Suspense fallback="">
        {useRoutes(routes)}
      </Suspense>
      <AppFooter/>
      <PlayBar/>
    </div>
  )
})

export default App
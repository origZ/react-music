import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div>
      <AppHeader/>
      <Suspense fallback="">
        {useRoutes(routes)}
      </Suspense>
      <AppFooter/>
    </div>
  )
})

export default App
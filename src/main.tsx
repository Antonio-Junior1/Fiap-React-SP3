import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import './styles.ts'
import {GlobalStyle} from './GlobalStyle.ts'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <GlobalStyle/>
    <App />    
  </StrictMode>,
)

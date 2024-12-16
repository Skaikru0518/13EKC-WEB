import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fejlec from './Modules/Fejlec.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fejlec />
  </StrictMode>,
)

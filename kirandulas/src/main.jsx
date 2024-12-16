import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fejlec from './Modules/Fejlec.jsx'
import Torzs from './Modules/Torzs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fejlec />
    <Torzs />
  </StrictMode>,
)

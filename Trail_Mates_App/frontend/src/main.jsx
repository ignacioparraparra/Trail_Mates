import { StrictMode } from 'react'
// Imports the function to create a root for rendering
import { createRoot } from 'react-dom/client'
// react router, makes it easier
import TrailMates from './TrailMates.jsx'

// Creates react root inside HTML to render react components 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TrailMates />
  </StrictMode>
)

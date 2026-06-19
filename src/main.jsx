import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'; // Make sure this points to the CSS file containing your @tailwind directives!


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



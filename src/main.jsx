import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import Form from './components/form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
    {/* <App /> */}
  </StrictMode>,
)

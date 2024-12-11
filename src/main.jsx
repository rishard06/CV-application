import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
// import App from './App.jsx'
import Form from './components/form.jsx'
import FormDisplay from './components/display.jsx'



function App() {
  const [formValues, setFormValues] = useState({});
  const handleValue = (newFormValues) => {
    setFormValues(newFormValues);
  }

  return (
    <>
      <Form onFormValues={handleValue} />
      <FormDisplay formValues={formValues} resetValues={handleValue} />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

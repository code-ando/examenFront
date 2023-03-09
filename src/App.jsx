import { useState } from 'react'

import './App.css'
import ContactForm from './components/contactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <hr/>
        <ContactForm/>
      <hr/>
        
    </div>
  )
}

export default App

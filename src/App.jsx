import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import { sample } from './components/sample.js';

function App() {

  const [contact, setContact] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: ''
  });

  const update = (key, value) => {
    setContact({
      ...contact,
      [key]: value
    });
  };

  // show sample
  const handleShowSample = () => {
    setContact(sample.contact);
  };

// clear btn
  const handleClear = () => {
    setContact({
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      linkedin: ''
    });

  };

  return (
    <>
      <Header onShowSample={handleShowSample} onClear={handleClear} />
      <Body contact={contact} update={update} />
    </>
  )
}

export default App

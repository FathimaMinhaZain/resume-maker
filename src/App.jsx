import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'

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
  const [showSample, setShowSample] = useState(false);

  const handleShowSample = () => {
    setShowSample(!showSample);
  };

  

  return (
    <>
      <Header onShowSample={handleShowSample} />
      <Body contact={contact} update={update} showSample={showSample} />
    </>
  )
}

export default App

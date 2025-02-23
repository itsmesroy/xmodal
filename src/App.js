import React, {useState} from 'react'
import ModalForm from './ModalForm.js';
import "./App.css"

function App() {
  const [isOpen, setIsOpen]= useState(false);

  const openModal=()=> setIsOpen(true);
  const closeModal=() => setIsOpen(false);

  return (
    <div className="App" style={{textAlign:"center", margin:"5px"}}>
      
      <h1>User Details Modal</h1>
      <button className='button' onClick={openModal} >Open Form</button>
      {isOpen && <ModalForm onClose={closeModal} />}
    
    </div>
  );
}

export default App;

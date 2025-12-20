import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Prop from './props/Prop'
import './App.css'

function App() {
     const[name,setName]=useState('');
  return (
    <div>
      <Prop name={name} setName={setName}/>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Table from './Student'
import { Employe } from './Data/Employe'
import EmployeTable from './Employe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Check Your Results</h3>
    < Table />

    < EmployeTable />
    
       
    </>
  )
}

export default App

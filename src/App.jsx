import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" w-screen h-screen bg-[#222831] flex flex-row  text-white">
      <Sidebar/>
    </div>
  )
}

export default App

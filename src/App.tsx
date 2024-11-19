import { useState } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  // ฟังก์ชันสำหรับรับ NUI Message จาก FiveM
  window.addEventListener('message', (event) => {
    const data = event.data
    if (data.type === 'openUI') {
      setIsVisible(true)
    }
  })

  // ฟังก์ชันสำหรับปิด UI
  const handleClose = () => {
    setIsVisible(false)
    // ส่ง callback ไปยัง FiveM
    fetch('https://fivem-react-ui/closeUI', {
      method: 'POST',
      body: JSON.stringify({})
    })
  }

  if (!isVisible) return null

  return (
    <div className="app-container">
      <div className="ui-container">
        <h1>FiveM React UI</h1>
        <button onClick={handleClose}>Close UI</button>
      </div>
    </div>
  )
}

export default App
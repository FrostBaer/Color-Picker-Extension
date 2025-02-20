import { useState } from 'react'
import catLogo from '/icon48.png'
import './App.css'

function App() {
  const [colour, setColour] = useState("")

  const onclick = async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript<string[], void>({
      target: {tabId: tab.id! },
      args: [colour],
      func: (colour) => {
        document.body.style.backgroundColor = colour;
      }
    });
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={catLogo} className="logo" alt="Derpy Cat logo" />
        </a>
      </div>
      <h1>Derpy Cat</h1>
      <div className="card">
        <input type="color" onChange={(e) => setColour(e.currentTarget.value)} />

        <button onClick={() => onclick()}> Set Background Colour
        </button>
      </div>
    </>
  )
}

export default App

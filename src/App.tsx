import { useState } from 'react'
import placeholderImage from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="header">
        <h1>Your feed</h1>
        <p>Enjoy the feed you enjoy</p>
      </div>

      <div id="feed">

        { ["2", "1", "3"].map((post, index) =>
          <article>
            <img src={ placeholderImage } />
            <h2>Header</h2>
            <p>Little snippet</p>
          </article>
        ) }

      </div>
    </div>
  )
}

export default App

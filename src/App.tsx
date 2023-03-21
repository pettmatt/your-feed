import { useState } from 'react'
import placeholderImage from './assets/react.svg'
import './App.css'

function App() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className="App">
      <div className="header">
        <h1>Your feed</h1>
        <p>Enjoy the feed you enjoy</p>
        <div>
          { ( showSearch ) ?
          <>
            <input />
            <button>Search</button>
            <button onClick={ () => setShowSearch(!showSearch) }>X</button>
          </>
          : <button onClick={ () => setShowSearch(!showSearch) }>Nope</button> 
          }
          </div>
      </div>

      <div id="feed">

        { ["1", "2", "3"].map((post, index) =>
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

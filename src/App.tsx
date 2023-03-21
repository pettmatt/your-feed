import { useState } from 'react'
import placeholderImage from './assets/react.svg'
import './App.scss'

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

      <div id="feed" className="column-flex">

        { ["1", "2", "3"].map((post, index) =>
          <article>
            <img src={ placeholderImage } />
            <div className="details">
              <h2>Header</h2>
              <p>Little snippet</p>
            </div>
          </article>
        ) }

      </div>
    </div>
  )
}

export default App

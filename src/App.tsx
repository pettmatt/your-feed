import { useEffect, useRef, useState } from 'react'
import placeholderImage from './assets/react.svg'
import './App.scss'

function App() {
  const [showSearch, setShowSearch] = useState(false)
  const [feedRow, setFeedRow] = useState(false)

  const toggleFlexStyling = () => {
    setFeedRow(!feedRow)
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Your feed</h1>
        <p>Enjoy the feed, <b>your</b> way</p>
        <div>
          { ( showSearch ) ?
          <>
            <input />
            <button>Search</button>
            <button onClick={ () => setShowSearch(!showSearch) }>X</button>
          </>
          : <button onClick={ () => setShowSearch(!showSearch) }>Search</button> 
          }

          <button onClick={ toggleFlexStyling }>
            { feedRow ? "Column" : "Row" }
          </button>
        </div>
      </div>

      <div id="feed" className={ feedRow ? "row-flex" : "column-flex" }>

        { ["1", "2", "3"].map((post, index) =>
          <article key={ index }>
            <div className="image-container">
              <img src={ placeholderImage } />
            </div>
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

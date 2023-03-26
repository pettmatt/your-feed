import { useEffect, useRef, useState } from 'react'
import placeholderImage from './assets/react.svg'
import './App.scss'

function App() {
  const [showSearch, setShowSearch] = useState(false)
  const [feedRow, setFeedRow] = useState(false)
  const [articles, setArticles] = useState([])

  const toggleFlexStyling = () => {
    setFeedRow(!feedRow)
  }

  useEffect(() => {
    const date = new Date("2023-03-23").toISOString()

    fetch(`http://localhost:3000/fetch/ign.com/${ date }`)
      .then( response => response.json() )
      .then( data => setArticles(data.articles) )
      .catch( error => console.log(error) )
  }, [])

  console.log("THIS ", articles)

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

        { articles.map((post, index) => {
          const postedDate = new Date(post.published).toLocaleString()

          return (
            <article key={ index }>
              <div className="image-container">
                <img src={ post.img?.src || placeholderImage } alt={ post.img?.alt } />
              </div>
              <div className="details">
                <div className="posted-details">
                  <a href={ post.url }>
                    { ( new URL(post.url).hostname ) }
                  </a>
                  <time dateTime={ post.published }>
                    { postedDate.replaceAll("/", ".") }
                  </time>
                </div>
                <h2>{ post.header }</h2>
                <p>{ post.paragraph }</p>
              </div>
            </article>
          )
        }) }

      </div>
    </div>
  )
}

export default App

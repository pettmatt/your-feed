import { useEffect, useRef, useState } from 'react'
import placeholderImage from './assets/react.svg'
import './App.scss'

import handleLocalStorage from './services/handleLocalStorage'

function App() {
  const [showSearch, setShowSearch] = useState(false)
  const [feedRow, setFeedRow] = useState(false)
  const [articles, setArticles] = useState<any[]>([])
  const [filter, setFilter] = useState("")

  const toggleFlexStyling = () => {
    setFeedRow(!feedRow)
  }

  useEffect(() => {
    const savedArticles = handleLocalStorage.getArticles()
    setArticles(savedArticles)

    // if ( articles.length === 0 ) {
    //   const date = new Date("2023-03-23").toISOString()
    //   handleLocalStorage.setLastSearchDate()

    //   fetch(`http://localhost:3000/fetch/ign.com/${ date }`)
    //     .then( response => response.json() )
    //     .then( data => {
    //       setArticles(data.articles)
    //       handleLocalStorage.storageArticles(data.articles)
    //     })
    //     .catch( error => console.log(error) )
    // }
  }, [])

  return (
    <div className="App">
      <div className="header">
        <h1>Your feed</h1>
        <p>Enjoy the feed, <b>your</b> way</p>
        <div>
          { ( showSearch ) ?
          <>
            <input value={ filter } onChange={ (e) => setFilter(e.target.value) } />
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

          if (
            post.header.toLowerCase().includes(filter.toLowerCase()) || 
            post.paragraph.toLowerCase().includes(filter.toLowerCase())
          ) {

            return (
              <article key={ index }>
                <div className="image-container">
                  <img src={ post.img?.src || placeholderImage } alt={ post.img?.alt }
                    onClick={ () => console.log("Clicked") } />
                </div>
                <div className="details">
                  <div className="posted-details">
                    <a href={ post.url }>
                      { ( post.url ) ? new URL(post.url).hostname : "" }
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

          }
        }) }

      </div>
    </div>
  )
}

export default App

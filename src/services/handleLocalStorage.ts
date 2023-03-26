const storageArticles = (articles: Array<object>) => {
    const oldArticles = localStorage.getItem("articles") || []
    localStorage.setItem("articles", JSON.stringify([articles, ...oldArticles]))
}

const getArticles = () => {
    const articles = localStorage.getItem("articles") || ""
    return JSON.parse(articles) || []
}

const setLastSearchDate = () => {
    const date = new Date().toISOString()
    // const currentDate = `${ date.getFullYear }-${ date.getMonth }-${ date.getDay }`

    localStorage.setItem("lastUpdateDate", date)
    console.log("Storage:", localStorage.getItem("lastUpdateDate"))
}

export default { storageArticles, getArticles, setLastSearchDate }
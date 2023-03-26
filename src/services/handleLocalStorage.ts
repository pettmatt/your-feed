const storageArticles = (articles: Array<object>) => {
    const oldArticles = localStorage.getItem("articles") || []
    window.localStorage.setItem("articles", JSON.stringify([...articles, ...oldArticles]))
}

const getArticles = () => {
    const articles = window.localStorage.getItem("articles") || ""
    return JSON.parse(articles) || []
}

const setLastSearchDate = () => {
    const date = new Date().toISOString()
    window.localStorage.setItem("lastUpdateDate", date)
}

const getLastSearchDate = () => {
    return window.localStorage.getItem("lastUpdateDate")
}

export default { storageArticles, getArticles, setLastSearchDate, getLastSearchDate }
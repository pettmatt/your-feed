const storageArticles = (articles: Array<object>) => {
    const oldArticles = JSON.parse(localStorage.getItem("articles") || "[]")
    const articleArray = joinAndMakeUniqueArray(articles, oldArticles)
    window.localStorage.setItem("articles", JSON.stringify(articleArray))
}

const getArticles = () => {
    const articles = window.localStorage.getItem("articles") || ""
    return (articles === "") ? [] : JSON.parse(articles)
}

const setLastSearchDate = () => {
    const date = new Date().toISOString()
    window.localStorage.setItem("lastUpdateDate", date)
}

const getLastSearchDate = () => {
    return window.localStorage.getItem("lastUpdateDate")
}

// functions that won't be exported
const joinAndMakeUniqueArray = (array1: any[], array2: any[]) => {
    const uniqueArray = makeUnique([...array1, ...array2])
    return uniqueArray
}

const makeUnique = (array: any[]) => {
    let a = array

    for (let i = 0; i < a.length; i++)
        for (let j = i + 1; j < a.length; j++)
            if (Object.is(a[i], a[j]))
                a.splice(j--, 1)

    return a
}

export default { storageArticles, getArticles, setLastSearchDate, getLastSearchDate }
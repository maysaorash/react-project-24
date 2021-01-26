import React, { createContext, useReducer } from "react";
import {reducer} from "./reducer" 

export const ArticleContext = createContext()

const ArticleProvider = ({ children }) => {

    const [articles, dispatch] = useReducer(reducer, [

        { id:1000, title:"post-1", body:"It is just an example" },
        
        { id:1001, title:"post-2", body:" It is just an example" },
        
        ])

// const saveArticle = article => {

// const newArticle = {

// id: Math.floor(Math.random()*1000),

// title: article.title,

// body: article.body,

// }

// setArticles([...articles, newArticle])

// }

return (

<ArticleContext.Provider value={{ articles, dispatch }}> {children}

</ArticleContext.Provider> )

}

export default ArticleProvider
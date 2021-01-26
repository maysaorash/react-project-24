import React, { useState,useReducer, useContext } from "react";
import "./AddArticle.css";
import {ArticleContext} from "../../context/articleContext";

const AddArticle = () => {
  const [article, setArticle] = useState();
  const { dispatch } = useContext(ArticleContext)

  const handleArticleData = e => {
    setArticle({
    ...article,
    [e.target.id]: e.target.value
    });
    };

   const addNewArticle = e => {
    e.preventDefault()
    dispatch({ type: "ADD_ARTICLE", article })
   }
console.log(article)
  return (
    <form className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
      />
      <button type="submit" onClick={addNewArticle}>Add article</button>
    </form>
  );
};
export default AddArticle;

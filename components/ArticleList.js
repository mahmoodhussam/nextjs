import React from 'react'
import ArticleItem from './ArticleItem'
import stylesArticle from '../styles/ArticleList.module.css'
function ArticleList({articles}) {
    return (
        <div>
            {articles.map((article) => (
                <ArticleItem key={article.id} article={article}/>
            ))}
        </div>
    )
}

export default ArticleList

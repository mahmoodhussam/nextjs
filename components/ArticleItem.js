import Link from 'next/link'
import React from 'react'

function ArticleItem({article}) {
    return (
        <div>
            <Link href="/articles/[id]" as={`/articles/${article.id}`} >
                <h1>{article.title}</h1>
            </Link>
        </div>
    )
}

export default ArticleItem

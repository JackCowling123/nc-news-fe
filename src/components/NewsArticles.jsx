import { Card } from "antd";
import {Link} from "react-router-dom";
import React from "react";

function NewsArticles({article}) {
    /* get rid of articleId states */

    return ( /* wrap card in a link */
        <Card
            title={article.title}
            style={{
                height: 500,
                width: 550,
                overflow: 'hidden'
            }}
        >
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <div style={{width: '100%', height: '200px', overflow: 'hidden'}}>
                {article.article_img_url ? <img style={{width: '100%', height: 'auto', overflow: 'hidden'}} src={article.article_img_url}/>: null}
            </div>
            {/*<button onClick={() => onClick(article.article_id)}>*/}
            <button>
                <Link to={`/ArticlePage/${article.article_id}`}>View Article</Link>
            </button>
            <p>Comments: {article.comment_count}</p>
            <p>Created at: {article.created_at}</p>
        </Card>
    )
}

export default NewsArticles;
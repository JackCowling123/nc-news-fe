import { Card } from "antd";

function NewsArticles({article}) {

    return (
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
            <button>Expand</button>
            <p>Comments: {article.comment_count}</p>
            <p>Created at: {article.created_at}</p>
        </Card>
    )
}

export default NewsArticles;
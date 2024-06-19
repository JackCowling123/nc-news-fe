import {useEffect, useState} from "react";
import {getArticleById, getArticles, getCommentsByArticleId} from "../utils.js";
import {useParams} from "react-router-dom";
import React from 'react';
import { Card} from 'antd';

function ArticlePage() {

    const {article_id} = useParams();
    const [loading, setLoading] = useState(true);
    const [currentArticle, setCurrentArticle,] = useState(null);
    const [commentsOn, setCommentsOn] = useState(false);
    const [currentComments, setCurrentComments] = useState(null);
    /*use params for useEffect*/

    const commentClick = (e) => {
        setCommentsOn(true);
    }


    useEffect(() => {
        getArticleById(article_id).then((data) => {
            setCurrentArticle(data.article);
            setLoading(false);
        });
    }, [article_id]);

    useEffect(() => {
        if (commentsOn) {
            getCommentsByArticleId(article_id).then((data) => {
                setCurrentComments(data);
            });
        }
    }, [article_id, commentsOn]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Card title={currentArticle.title}>
                {currentArticle.article_img_url ?
                    <img style={{width: '100%', height: 'auto', overflow: 'hidden'}} src={currentArticle.article_img_url}/>
                    : null}
                <p>Author: {currentArticle.author}</p>
                <p>Topic: {currentArticle.topic}</p>
                <p>{currentArticle.body}</p>
                <button onClick={commentClick}>
                    View Comments
                </button>
            </Card>
            {commentsOn && currentComments ? (
                <div>
                    {currentComments.map((comment, index) => (
                        <div key={index}>
                            <h3>Author: {comment.author}</h3>
                            <p>{comment.body}</p>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>


    )
}

export default ArticlePage;
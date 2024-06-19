import {useEffect, useState} from "react";
import {getArticleById, getArticles} from "../utils.js";
import {useParams} from "react-router-dom";
import React from 'react';

function ArticlePage() {

    const {article_id} = useParams();
    console.log(article_id);
    const [loading, setLoading] = useState(true);
    const [currentArticle, setCurrentArticle,] = useState(null);
    /*use params for useEffect*/

    useEffect(() => {
        getArticleById(article_id).then((data) => {
            console.log(data);
            setCurrentArticle(data.article);
            setLoading(false);
        });
    }, [article_id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{currentArticle.title}</h1>
            {currentArticle.article_img_url ? <img style={{width: '100%', height: 'auto', overflow: 'hidden'}} src={currentArticle.article_img_url}/>: null}
            <p>Author: {currentArticle.author}</p>
            <p>Topic: {currentArticle.topic}</p>
            <p>{currentArticle.body}</p>
        </div>

    )
}

export default ArticlePage;
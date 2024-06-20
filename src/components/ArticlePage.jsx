import {useEffect, useState} from "react";
import {getArticleById, updateArticleVotes, getCommentsByArticleId,} from "../utils.js";
import {useParams} from "react-router-dom";
import React from 'react';
import { Card, Flex, Radio, Button} from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import NewComment from "./AddComment.jsx";

function ArticlePage() {

    const {article_id} = useParams();
    const [loading, setLoading] = useState(true);
    const [currentArticle, setCurrentArticle,] = useState(null);
    const [commentsOn, setCommentsOn] = useState(false);
    const [currentComments, setCurrentComments] = useState(null);
    const [voteClicked, setVoteClicked] = useState(false);
    const [currentVotes, setCurrentVotes] = useState(0);


    const commentClick = () => {
        setCommentsOn(true);
    }

    const updateVotes = () => {
        if (voteClicked) {
            setCurrentVotes(currentVotes - 1);
            updateArticleVotes({ inc_votes: -1 }, article_id).then((data) => {
            }).catch((error) => {
                console.log(error)
                alert('Failed to update votes at this time. Please try again later');
            })
        } else {
            setCurrentVotes(currentVotes + 1);
            updateArticleVotes({ inc_votes: 1 }, article_id).then((data) => {
            }).catch((error) => {
                console.log(error)
                alert('Failed to update votes at this time. Please try again later');
            })
        }
    };

    const voteClick = () => {
        setVoteClicked(!voteClicked);
        updateVotes();
    };

    useEffect(() => {

    }, [currentVotes])




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
                <p>Votes: {currentArticle.votes + currentVotes}</p>
                <Flex gap="middle" align="start" vertical>
                    <Button
                        onClick={voteClick}
                        className={`myButtons ${voteClicked === true ? 'checked' : ''}`}
                        value="like">
                        <LikeOutlined />
                    </Button>
                </Flex>
                <NewComment articleId={article_id}  loading={loading} setLoading={setLoading}/>
                <button onClick={commentClick}>
                    View All Comments
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
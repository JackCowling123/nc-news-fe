import React, { useState } from 'react';
import {getArticleById, insertNewComment} from "../utils.js";
import { Button, Form, Input, Radio } from 'antd';

function NewComment({articleId, loading, setLoading}) {
    const [commentUsername, setCommentUsername] = useState("");
    const [commentBody, setCommentBody] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const submittedComment = {username: commentUsername , body: commentBody}



        if (commentUsername === '' || commentBody === '') {
            alert('Both fields are required.');
            return;
        }
        insertNewComment(articleId.articleId, submittedComment)
            .then((data) => {
                setCommentUsername(""); // Clear the username field if needed
                setCommentBody(""); // Clear the comment field after submission
                setLoading(false);
                alert('Comment posted successfully');
            }).catch((error) => {
            alert('Failed to post comment at this time. Please try again later');
        })

    }

    return (
        <form className='comment-form' onSubmit={handleSubmit}>
            <label>Enter your name:
                <br/>
                <input
                    type="text"
                    value={commentUsername}
                    onChange={(e) => setCommentUsername(e.target.value)}
                />
            </label>
            <br/>
            <label>Enter Comment:
                <br/>
                <input
                    type="text"
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <input type="submit" />
        </form>
    )
}

export default NewComment;


/*

 */
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function MyProfile({user, setUser}) {
    const [profileUsername, setProfileUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (profileUsername === '') {
            alert('Please enter username');
            return;
        } else {
            setUser({
                loggedIn: true,
                username: profileUsername
            });
            navigate('/');
        }
    }

    return (
        <form className='comment-form' onSubmit={handleSubmit}>
            <label>Enter your name:
                <br/>
                <input
                    type="text"
                    value={profileUsername}
                    onChange={(e) => setProfileUsername(e.target.value)}
                />
            </label>
            <br/>
            <input type="submit" />
        </form>
    )
}

export default MyProfile;

/*

const handleSubmit = (event) => {
        event.preventDefault();




        if (commentUsername === '' || commentBody === '') {
            alert('Both fields are required.');
            return;
        }
        insertNewComment(articleId.articleId, submittedComment)
            .then((data) => {
                setCommentUsername("");
                setCommentBody("");
                setLoading(false);
                alert('Comment posted successfully');
            }).catch((error) => {
            alert('Failed to post comment at this time. Please try again later');
        })

    }

 */
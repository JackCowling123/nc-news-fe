import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://nc-news-hoaj.onrender.com/api',
})

export const getArticles = () => {
    return newsApi.get('/articles').then((res) => {
        return res.data;
    })
}

export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then((res) => {
        return res.data;
    })
}

export const getCommentsByArticleId = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
        return res.data;
    })
}

export const updateArticleVotes = (votes, article_id) => {
    return newsApi.patch( `/articles/${article_id}`, votes).then((res) => {
        return res.data;
    })

}

export const insertNewComment = (article_id, newComment) => {
    return newsApi.post( `/articles/${article_id}/comments`, newComment).then((res) => {
        return res.data;
    }).catch((error) => {
        console.log(error)
    })

}

export const deleteComment = (article_id) => {
    return newsApi.delete( `/articles/comments{comment_id}`).then((res) => {
        return res.data;
    }).catch((error) => {
        console.log(error)
    })
}




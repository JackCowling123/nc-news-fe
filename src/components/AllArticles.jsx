import React from 'react';
import {useEffect, useState} from "react";
import {getArticles} from "../utils.js";
import NewsArticles from './NewsArticles.jsx';
import { Flex } from "antd";


function AllArticles() {

    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);

    // const [filter, setFilter] = useState("All Items");

    useEffect(() => {
        getArticles().then((data) => {
            console.log(data);
            setNewsData(data.allArticles);
            setLoading(false);
        });
    }, []);
    console.log(newsData);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <h1>Explore Our Articles</h1>
            <Flex justify={'space-between'} wrap gap="small">

                {newsData.map((article) => {
                    return <NewsArticles key={article.article_id} article={article}/>
                })}
            </Flex>
        </div>


    )
}

export default AllArticles;
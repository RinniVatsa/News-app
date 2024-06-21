// src/components/ArticleList.js

import React, { useEffect, useState } from 'react';
import { fetchNewsArticles } from '../services/newsService';
import Article from './Article';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async() => {
            const data = await fetchNewsArticles();
            setArticles(data);
        };
        fetchArticles();
    }, []);

    return ( <
        div className = "article-list" > {
            articles.map((article) => ( <
                Article key = { article.url }
                article = { article }
                />
            ))
        } <
        /div>
    );
};

export default ArticleList;
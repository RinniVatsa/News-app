// src/App.js
import React, { useEffect, useState } from 'react';
import Article from './components/Article';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const API_KEY = '9b9248b480504200987489a213f6e489';
    const BASE_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error('Error fetching the news:', error));
    }, []);

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return ( <
        div className = "app" >
        <
        header className = "app-header" >
        <
        h1 > TechCrunch News < /h1> <
        SearchBar searchTerm = { searchTerm }
        setSearchTerm = { setSearchTerm }
        /> < /
        header > <
        main className = "articles" > {
            filteredArticles.map(article => ( <
                Article key = { article.url }
                article = { article }
                />
            ))
        } <
        /main> <
        footer className = "app-footer" >
        <
        p > & copy; 2024 TechCrunch News.All rights reserved. < /p> < /
        footer > <
        /div>
    );
};

export default App;
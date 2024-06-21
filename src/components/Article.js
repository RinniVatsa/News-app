// src/components/Article.js
import React, { useState, useEffect } from 'react';
import './Article.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const Article = ({ article }) => {
    const { title, description, url, urlToImage, author, publishedAt } = article;
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.some(fav => fav.url === url));
    }, [url]);

    const handleFavoriteClick = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            const updatedFavorites = favorites.filter(fav => fav.url !== url);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        } else {
            favorites.push(article);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    return ( <
        div className = "article" > {
            urlToImage ? ( <
                img src = { urlToImage }
                alt = { title }
                className = "article-image" / >
            ) : ( <
                div className = "image-placeholder" > No Image Available < /div>
            )
        } <
        div className = "article-content" >
        <
        h2 className = "article-title" > { title } < /h2> <
        p className = "article-description" > { description } < /p> <
        p className = "article-author" > { author } - { new Date(publishedAt).toLocaleDateString() } < /p> <
        a href = { url }
        target = "_blank"
        rel = "noopener noreferrer"
        className = "article-link" >
        Read more <
        /a> <
        button onClick = { handleFavoriteClick }
        className = "favorite-button" >
        <
        FontAwesomeIcon icon = { isFavorite ? solidHeart : regularHeart }
        className = "heart-icon" / >
        <
        /button> <
        /div> <
        /div>
    );
};

export default Article;
import React from 'react';
import CardCSS from './Card.module.css';
import PostImg from '../../assets/post.jpeg';

function Card({ heading, authorName, description, imageUrl }) {
    // const heading = "Road to Radiant";
    // const authorName = "Vinayak";
    // const description = "This is a brief description of the post. It provides insight into what the post is about.";

    return (
        <div className={CardCSS["card"]}>
            <img src={imageUrl} alt={heading} className={CardCSS["card-image"]} />
            <div className={CardCSS["card-content"]}>
                <h2 className={CardCSS["card-heading"]}>{heading}</h2>
                <p className={CardCSS["card-author"]}>By {authorName}</p>
                <p className={CardCSS["card-description"]}>{description}</p>
            </div>
        </div>
    );
}

export default Card;
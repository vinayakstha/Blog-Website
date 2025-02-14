import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../environment';
import FullPostCSS from './FullPost.module.css';

function FullPost() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${API.BASE_URL}/api/post/${postId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPost(response.data.data);
                const userResponse = await axios.get(`${API.BASE_URL}/api/user/${response.data.data.userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAuthor(userResponse.data.data.username);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [postId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    const contentParagraphs = post.content.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
    ));

    return (
        <div className={FullPostCSS["container"]}>
            <div className={FullPostCSS["heading"]}>
                <h1 className={FullPostCSS["title"]}>{post.title}</h1>
            </div>
            <div className={FullPostCSS["author-name"]}>
                <p className={FullPostCSS["author"]}>By {author}</p>
            </div>
            <div className={FullPostCSS["post-image"]}>
                <img src={`${API.BASE_URL}/${post.photo}`} alt={post.title} className={FullPostCSS["image"]} />
            </div>
            <div className={FullPostCSS["content-container"]}>
                {/* <p>{post.content}</p> */}
                {contentParagraphs}
            </div>
        </div>
    );
}

export default FullPost;
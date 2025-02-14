import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../environment';
import FullPostCSS from './FullPost.module.css';
import { toast } from 'react-toastify';

function FullPost() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState('');
    const [currentUserId, setCurrentUserId] = useState(null);
    const navigate = useNavigate();

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

        const fetchCurrentUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${API.BASE_URL}/api/auth/init`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCurrentUserId(response.data.data.userId);
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        };

        fetchPost();
        fetchCurrentUser();
    }, [postId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    const handleEdit = () => {
        navigate(`/edit-post/${postId}`);
    };

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`${API.BASE_URL}/api/post/${postId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            navigate('/Post');
            toast.success("Post deleted successfully");
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

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
            {post.userId === currentUserId && (
                <div className={FullPostCSS["buttons"]}>
                    <button onClick={handleEdit} className={FullPostCSS["edit-button"]} id={FullPostCSS["btn"]}>Update</button>
                    <button onClick={handleDelete} className={FullPostCSS["delete-button"]} id={FullPostCSS["btn"]}>Delete</button>
                </div>
            )}
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
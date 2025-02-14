import Card from "./Card";
import PostCSS from "./Post.module.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../environment";
function Post() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${API.BASE_URL}/api/post`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPosts(response.data.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${API.BASE_URL}/api/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const usersData = response.data.data.reduce((acc, user) => {
                    acc[user.userId] = user.username;
                    return acc;
                }, {});
                setUsers(usersData);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchPosts();
        fetchUsers();
    }, []);

    return (
        <>
            <div className={PostCSS["select-container"]}>
                <select className={PostCSS["select-input"]}>
                    <option value="">Select Category</option>
                    <option value="tech">Technology</option>
                    <option value="health">Health</option>
                    <option value="lifestyle">Lifestyle</option>
                </select>
            </div>
            <div className={PostCSS["post-container"]}>
                {posts.map((post) => (
                    <Link to={`/Post/${post.postId}`} key={post.postId}>
                        <Card
                            key={post.postId}
                            heading={post.title}
                            authorName={users[post.userId]} // Assuming you have a way to get the author's name from the userId
                            description={post.description}
                            imageUrl={`${API.BASE_URL}/${post.photo}`}
                        />
                    </Link>
                ))}
            </div>
        </>
    )
}
export default Post;
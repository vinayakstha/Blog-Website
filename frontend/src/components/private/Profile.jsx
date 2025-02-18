import ProfileCSS from "./Profile.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../environment";
import Card from "./Card";
import { CircleUserRound } from 'lucide-react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Profile() {
    const [currentUser, setCurrentUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        toast.success("Logout successful")
        navigate("/");
    };

    useEffect(() => {
        const token = localStorage.getItem("token");

        const fetchCurrentUser = async () => {
            try {
                const response = await axios.get(`${API.BASE_URL}/api/auth/init`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setCurrentUser(response.data.data);
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        };

        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${API.BASE_URL}/api/post`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setPosts(response.data.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchCurrentUser();
        fetchPosts();
    }, []);

    if (!currentUser) return <div>Loading...</div>;

    // Filter posts so that only those created by the current user are displayed.
    const userPosts = posts.filter((post) => post.userId === currentUser.userId);

    return (
        <div className={ProfileCSS["profile-container"]}>
            <div className={ProfileCSS["user-details"]}>
                <div className={ProfileCSS["username"]}>
                    <h1>{currentUser.username}</h1>
                    <p>{currentUser.email}</p>
                </div>
                <div className={ProfileCSS["logout-button"]}>
                    <button className={ProfileCSS["logout"]} onClick={logout}>Logout</button>
                </div>
            </div>
            <hr />
            <div className={ProfileCSS["my-post-h2"]}>
                <h2>My Posts</h2>
            </div>
            <div className={ProfileCSS["post"]}>
                {userPosts.length ? (
                    userPosts.map((post) => (
                        <Link to={`/Post/${post.postId}`} key={post.postId}>
                            <Card
                                heading={post.title}
                                authorName={currentUser.username}
                                description={post.description}
                                imageUrl={`${API.BASE_URL}/${post.photo}`}
                            />
                        </Link>
                    ))
                ) : (
                    <div className={ProfileCSS["no-post"]}>
                        <p>No posts available.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;

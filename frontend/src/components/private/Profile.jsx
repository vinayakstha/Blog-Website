import ProfileCSS from "./Profile.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../environment";
import Card from "./Card";
import { X } from 'lucide-react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Profile() {
    const [currentUser, setCurrentUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            username: currentUser?.username || "",
            email: currentUser?.email || "",
        }
    });

    useEffect(() => {
        if (currentUser) {
            setValue("username", currentUser.username);
            setValue("email", currentUser.email);
        }
    }, [currentUser, setValue]);

    if (!currentUser) return <div>Loading...</div>;

    const userPosts = posts.filter((post) => post.userId === currentUser.userId);

    const handleEditProfile = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveProfile = async (data) => {
        const token = localStorage.getItem("token");
        try {
            await axios.put(`${API.BASE_URL}/api/user/${currentUser.userId}`, {
                username: data.username,
                email: data.email,
            }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            toast.success("Profile updated successfully");
            setIsModalOpen(false);
            setCurrentUser({ ...currentUser, username: data.username, email: data.email });
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("Error updating profile. Please try again.");
        }
    };

    return (
        <div className={ProfileCSS["profile-container"]}>
            <div className={ProfileCSS["user-details"]}>
                <div className={ProfileCSS["image"]}>
                </div>

                <div className={ProfileCSS["username"]}>
                    <h1>{currentUser.username}</h1>
                    <p>{currentUser.email}</p>
                </div>
                <div className={ProfileCSS["buttons"]}>
                    <button className={ProfileCSS["edit-profile"]} onClick={handleEditProfile}>Edit Profile</button>
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

            {isModalOpen && (
                <div className={ProfileCSS["modal"]}>
                    <div className={ProfileCSS["modal-content"]}>
                        <div>
                            <span className={ProfileCSS["close"]} onClick={handleCloseModal}><X /></span>

                            <h2>Edit Profile</h2>
                        </div>
                        <form onSubmit={handleSubmit(handleSaveProfile)}>
                            <div className={ProfileCSS["input-field"]}>
                                <label>Username</label>
                                <input
                                    type="text"
                                    {...register("username", {
                                        required: "Username is required",
                                        minLength: {
                                            value: 4,
                                            message: "Must be longer than 4 characters"
                                        }
                                    })}
                                />
                                {errors.username && <p className={ProfileCSS["error-message"]}>{errors.username.message}</p>}
                            </div>
                            <div className={ProfileCSS["input-field"]}>
                                <label>Email</label>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Invalid Email"
                                        }
                                    })}
                                />
                                {errors.email && <p className={ProfileCSS["error-message"]}>{errors.email.message}</p>}
                            </div>
                            <button type="submit" className={ProfileCSS["save-button"]}>Save</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;

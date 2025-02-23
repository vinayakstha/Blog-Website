import EditPostCSS from "./EditPost.module.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../environment";
import { toast } from "react-toastify";
import axios from "axios";

function EditPost() {
    const { postId } = useParams();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm();

    const [categories, setCategories] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${API.BASE_URL}/api/category`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCategories(response.data.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
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
                setUserId(response.data.data.userId);
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        };

        const fetchPost = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${API.BASE_URL}/api/post/${postId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const postData = response.data.data;
                setValue("title", postData.title);
                setValue("description", postData.description);
                setValue("content", postData.content);
                setValue("category", postData.categoryId);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchCategories();
        fetchCurrentUser();
        fetchPost();
    }, [postId, setValue]);

    async function onSubmit(data) {
        try {
            const token = localStorage.getItem("token");

            let photoPath = null;
            if (data.file.length > 0) {
                const formData = new FormData();
                formData.append("file", data.file[0]);

                const uploadResponse = await axios.post(`${API.BASE_URL}/api/file/upload`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                });

                photoPath = uploadResponse.data.filePath;
            }

            const postData = {
                title: data.title,
                description: data.description,
                content: data.content,
                photo: photoPath || undefined,
                categoryId: data.category,
                userId: userId,
            };

            await axios.put(`${API.BASE_URL}/api/post/${postId}`, postData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Post updated successfully");
            navigate(`/Post/${postId}`);
        } catch (error) {
            console.error("Error updating post:", error);
        }
    }

    return (
        <div className={EditPostCSS["main-container"]}>
            <div className={EditPostCSS["heading"]}>
                <h2>Edit your post</h2>
            </div>
            <form className={EditPostCSS["create-form"]} onSubmit={handleSubmit(onSubmit)}>
                <div className={EditPostCSS["input-field"]}>
                    <input type="text" placeholder="Title" {...register("title", { required: "Title is required" })} />
                </div>
                {errors.title && <p className={EditPostCSS["error-message"]}>{errors.title.message}</p>}

                <div className={EditPostCSS["input-field"]}>
                    <input type="text" placeholder="Description" {...register("description", { required: "Description is required" })} />
                </div>
                {errors.description && <p className={EditPostCSS["error-message"]}>{errors.description.message}</p>}

                <div className={EditPostCSS["middle-fields"]}>
                    <div className={EditPostCSS["input-field"]} id={EditPostCSS["file-input-container"]}>
                        <input type="file" id={EditPostCSS["file-input"]} {...register("file")} />
                    </div>
                    {errors.file && <p className={EditPostCSS["error-message"]}>{errors.file.message}</p>}

                    <div className={EditPostCSS["input-field"]} id={EditPostCSS["dropdown-container"]}>
                        <select className={EditPostCSS["select-category"]} {...register("category", { required: "Category is required" })}>
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category.categoryId} value={category.categoryId}>
                                    {category.categoryName}
                                </option>
                            ))}
                        </select>
                    </div>
                    {errors.category && <p className={EditPostCSS["error-message"]} id={EditPostCSS["category-error-message"]}>{errors.category.message}</p>}
                </div>

                <div className={EditPostCSS["input-field"]} id={EditPostCSS["text-area-input"]}>
                    <textarea placeholder="Content" {...register("content", { required: "Content is required" })}></textarea>
                </div>
                {errors.content && <p className={EditPostCSS["error-message"]}>{errors.content.message}</p>}
                <div className={EditPostCSS["create-button-container"]}>
                    <button className={EditPostCSS["create-button"]}>Update Post</button>
                </div>
            </form>
        </div>
    );
}

export default EditPost;
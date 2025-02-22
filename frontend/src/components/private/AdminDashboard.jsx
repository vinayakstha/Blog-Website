// import React, { useState, useEffect } from 'react';
// import AdminDashboardCSS from './AdminDashboard.module.css';
// import axios from 'axios';
// import { API } from '../../environment';
// import { Trash2 } from 'lucide-react';

// function AdminDashboard() {
//     const [postCount, setPostCount] = useState(0);
//     const [userCount, setUserCount] = useState(0);
//     const [categoryCount, setCategoryCount] = useState(0);
//     const [users, setUsers] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [newCategory, setNewCategory] = useState('');

//     useEffect(() => {
//         const fetchCounts = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 const postsResponse = await axios.get(`${API.BASE_URL}/api/post`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setPostCount(postsResponse.data.data.length);

//                 const userResponse = await axios.get(`${API.BASE_URL}/api/user`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setUserCount(userResponse.data.data.length);

//                 const categoryResponse = await axios.get(`${API.BASE_URL}/api/category`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setCategoryCount(categoryResponse.data.data.length);
//                 setCategories(categoryResponse.data.data);

//                 const usersResponse = await axios.get(`${API.BASE_URL}/api/user`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setUsers(usersResponse.data.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchCounts();
//     }, []);

//     const handleAddCategory = async () => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.post(`${API.BASE_URL}/api/category`, { categoryName: newCategory }, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             setCategories([...categories, response.data.data]);
//             setNewCategory('');
//         } catch (error) {
//             console.error("Error adding category:", error);
//         }
//     };

//     const handleDeleteCategory = async (categoryId) => {
//         try {
//             const token = localStorage.getItem("token");
//             await axios.delete(`${API.BASE_URL}/api/category/${categoryId}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             setCategories(categories.filter(category => category.categoryId !== categoryId));
//         } catch (error) {
//             console.error("Error deleting category:", error);
//         }
//     };

//     return (
//         <div className={AdminDashboardCSS["dashboard-container"]}>
//             <div className={AdminDashboardCSS["counts-container"]}>
//                 <div className={AdminDashboardCSS["count-box"]} id={AdminDashboardCSS['post-box']}>
//                     <h2>Posts</h2>
//                     <p>{postCount}</p>
//                 </div>
//                 <div className={AdminDashboardCSS["count-box"]} id={AdminDashboardCSS['user-box']}>
//                     <h2>Users</h2>
//                     <p>{userCount}</p>
//                 </div>
//                 <div className={AdminDashboardCSS["count-box"]} id={AdminDashboardCSS['category-box']}>
//                     <h2>Categories</h2>
//                     <p>{categoryCount}</p>
//                 </div>
//             </div>
//             <div className={AdminDashboardCSS["category-container"]}>
//                 <h2>Categories</h2>
//                 <div className={AdminDashboardCSS["add-category"]}>
//                     <input
//                         type="text"
//                         value={newCategory}
//                         onChange={(e) => setNewCategory(e.target.value)}
//                         placeholder="New Category"
//                     />
//                     <button onClick={handleAddCategory}>Add Category</button>
//                 </div>
//                 <table className={AdminDashboardCSS["category-table"]}>
//                     <thead>
//                         <tr>
//                             <th>Category Name</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {categories.map((category) => (
//                             <tr key={category.categoryId}>
//                                 <td>{category.categoryName}</td>
//                                 <td>
//                                     <button className={AdminDashboardCSS['delete-button']} onClick={() => handleDeleteCategory(category.categoryId)}><Trash2 /></button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             <div className={AdminDashboardCSS["table-container"]}>
//                 <h2>User Details</h2>
//                 <table className={AdminDashboardCSS["user-table"]}>
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Email</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user) => (
//                             <tr key={user.userId}>
//                                 <td>{user.username}</td>
//                                 <td>{user.email}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import AdminDashboardCSS from './AdminDashboard.module.css';
import axios from 'axios';
import { API } from '../../environment';
import { Trash2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

function AdminDashboard() {
    const [postCount, setPostCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [categoryCount, setCategoryCount] = useState(0);
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const token = localStorage.getItem("token");
                const postsResponse = await axios.get(`${API.BASE_URL}/api/post`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPostCount(postsResponse.data.data.length);

                const userResponse = await axios.get(`${API.BASE_URL}/api/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserCount(userResponse.data.data.length);

                const categoryResponse = await axios.get(`${API.BASE_URL}/api/category`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCategoryCount(categoryResponse.data.data.length);
                setCategories(categoryResponse.data.data);

                const usersResponse = await axios.get(`${API.BASE_URL}/api/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(usersResponse.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchCounts();
    }, []);

    const handleAddCategory = async (data) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(`${API.BASE_URL}/api/category`, { categoryName: data.newCategory }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCategories([...categories, response.data.data]);
            reset();
        } catch (error) {
            console.error("Error adding category:", error);
        }
    };

    const handleDeleteCategory = async (categoryId) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`${API.BASE_URL}/api/category/${categoryId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCategories(categories.filter(category => category.categoryId !== categoryId));
        } catch (error) {
            console.error("Error deleting category:", error);
        }
    };

    return (
        <div className={AdminDashboardCSS["dashboard-container"]}>
            <div className={AdminDashboardCSS['heading']}>
                <h1>Admin Dashboard</h1>
            </div>
            <div className={AdminDashboardCSS["counts-container"]}>
                <div className={AdminDashboardCSS["count-box"]} id={AdminDashboardCSS['post-box']}>
                    <h2>Posts</h2>
                    <p>{postCount}</p>
                </div>
                <div className={AdminDashboardCSS["count-box"]} id={AdminDashboardCSS['user-box']}>
                    <h2>Users</h2>
                    <p>{userCount}</p>
                </div>
                <div className={AdminDashboardCSS["count-box"]} id={AdminDashboardCSS['category-box']}>
                    <h2>Categories</h2>
                    <p>{categoryCount}</p>
                </div>
            </div>
            <div className={AdminDashboardCSS["category-container"]}>
                <h2>Categories</h2>
                <form onSubmit={handleSubmit(handleAddCategory)} className={AdminDashboardCSS["add-category"]}>
                    <input
                        type="text"
                        {...register('newCategory', { required: 'Category name is required' })}
                        placeholder="New Category"
                    />
                    <button type="submit">Add Category</button>
                </form>
                {errors.newCategory && <p className={AdminDashboardCSS["error-message"]}>{errors.newCategory.message}</p>}
                <table className={AdminDashboardCSS["category-table"]}>
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.categoryId}>
                                <td>{category.categoryName}</td>
                                <td>
                                    <button className={AdminDashboardCSS['delete-button']} onClick={() => handleDeleteCategory(category.categoryId)}><Trash2 /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={AdminDashboardCSS["table-container"]}>
                <h2>User Details</h2>
                <table className={AdminDashboardCSS["user-table"]}>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.userId}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;


import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import { toast } from 'react-hot-toast';
import { API_URL } from "../config";
// import AdminLayout from "../components/Layout/AdminLayout";

const ADMIN_USERS_URL = `${API_URL}/api/admin/users`;

export const AdminUsers = () => {
    const { authorizationToken } = useAuth();

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllUsersData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(ADMIN_USERS_URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            // Handle the 404 case specifically - this means no users exist
            if (response.status === 404) {
                setUsers([]);
                setIsLoading(false);
                return;
            }

            if (!response.ok) {
                throw new Error(`Server responded with status ${response.status}`);
            }

            const responseData = await response.json();
            setUsers(Array.isArray(responseData) ? responseData : []);
        } catch (error) {
            console.error("Error fetching users:", error);
            setUsers([]);
        } finally {
            setIsLoading(false);
        }
    };

    const deleteUser = async (id) => {
        const DELETE_USERS_URL = `${API_URL}/api/admin/users/delete/${id}`;
       
        try {
            const response = await fetch(DELETE_USERS_URL, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                toast.success("User deleted successfully");
                getAllUsersData();
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Failed to delete user");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Error deleting user");
        }
    };

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
        <>
            <div className="admin-user-container">
                <div className="admin-user-heading">
                    <span>
                        Register User Data
                    </span>
                </div>

                {isLoading ? (
                    <div className="loading-container">Loading users...</div>
                ) : (
                    <div className="admin-user-table">
                        {users.length === 0 ? (
                            <div className="no-users">No users found</div>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((curUser, index) => (
                                        <tr key={index}>
                                            <td>{curUser.username}</td>
                                            <td>{curUser.email}</td>
                                            <td>
                                                <button 
                                                    className="btn-table btn-delete-user"
                                                    onClick={() => deleteUser(curUser._id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};
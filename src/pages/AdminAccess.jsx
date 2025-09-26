import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import { toast } from 'react-hot-toast';
import {API_URL} from "../config"

const ADMIN_ACCESS_URL = `${API_URL}/api/admin/access`;

export const AdminAccess = () => {
    const { authorizationToken } = useAuth();

    const [users, setUsers] = useState([]);

    const getAllAdminsData = async () => {
        try {
            const response = await fetch(ADMIN_ACCESS_URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            const responseData = await response.json();
            // console.log(`Users data ${responseData}`);
            setUsers(responseData);
        } catch (error) {
            console.log("Error fetching admins:", error);
        }
    };

    const removeAdmins = async (id) =>{
        const REMOVE_ADMIN_ACCESS_URL = `${API_URL}/admin/access/${id}`;
       
        const response = await fetch(REMOVE_ADMIN_ACCESS_URL, {
            method: "DELETE",
            headers: {
                Authorization: authorizationToken,
            },
            
        });

        if(response.ok){
            toast.success("Admin access revoked")
            getAllAdminsData();
        }

        
        const responseData = await response.json();
        // console.log(`Users data after delete ${responseData}`);
        
    };

    useEffect(() => {
        getAllAdminsData();
    }, []);

    return (
        <>
            <div className="admin-user-container">
                <div className="admin-user-heading">
                    <span>
                        Admins Data
                    </span>
                </div>

                <div className="admin-user-table">

                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((curAdmins, index) => {
                                return (
                                   <tr key={index}>
                                       <td> {curAdmins.username} </td>
                                       <td> {curAdmins.email} </td>
                                       <td>
                                        <button 
                                        className=" btn-table btn-delete-user"
                                        onClick={()=> removeAdmins(curAdmins._id)}>
                                            Delete
                                        </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </>


    )
};

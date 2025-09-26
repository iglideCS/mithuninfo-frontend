import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import { toast } from 'react-hot-toast';
import { API_URL } from "../config";

const ADMIN_CONTACTS_URL = `${API_URL}/api/admin/contacts`;

export const AdminContacts = () => {
    const { authorizationToken } = useAuth();

    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllContactsData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(ADMIN_CONTACTS_URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            // Handle the 404 case specifically - this means no contacts exist
            if (response.status === 404) {
                setContacts([]);
                setIsLoading(false);
                return;
            }

            if (!response.ok) {
                throw new Error(`Server responded with status ${response.status}`);
            }

            const responseData = await response.json();
            setContacts(Array.isArray(responseData) ? responseData : []);
        } catch (error) {
            console.error("Error fetching contacts:", error);
            setContacts([]);
        } finally {
            setIsLoading(false);
        }
    };

    const deleteContacts = async (id) => {
        const DELETE_CONTACTS_URL = `${API_URL}/api/admin/contacts/delete/${id}`;
        
        try {
            const response = await fetch(DELETE_CONTACTS_URL, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                toast.success("Contact deleted successfully");
                getAllContactsData();
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Failed to delete contact");
            }
        } catch (error) {
            console.error("Error deleting contact:", error);
            toast.error("Error deleting contact");
        }
    };

    useEffect(() => {
        getAllContactsData();
    }, []);

    return (
        <>
            <div className="admin-user-container">
                <div className="admin-user-heading">
                    <span>
                        User Contacts Data
                    </span>
                </div>

                {isLoading ? (
                    <div className="loading-container">Loading contacts...</div>
                ) : (
                    <div className="admin-user-table">
                        {contacts.length === 0 ? (
                            <div className="no-contacts">No contacts found</div>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Message</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.map((curContact, index) => (
                                        <tr key={index}>
                                            <td>{curContact.username}</td>
                                            <td>{curContact.email}</td>
                                            <td>{curContact.message}</td>
                                            <td>
                                                <button 
                                                    className="btn-table btn-delete-user"
                                                    onClick={() => deleteContacts(curContact._id)}>
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
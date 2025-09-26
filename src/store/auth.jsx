import { createContext, useContext, useEffect, useState } from "react";
import {API_URL} from "../config"

// Create the context but don't export directly from creation
const AuthContext = createContext();

const USER_URL = `${API_URL}/api/auth/user`;
const ACHIEVEMENTS_URL = `${API_URL}/api/data/achievement`;

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(""); 
    const [achievements, setAchievements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const authorizationToken = `Bearer ${token}`;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token', serverToken);
    };

    let isLoggedIn = !!token; //token hai toh true nahi hai toh false

    //logout function
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    const userAuthentication = async () => {
        setIsLoading(true);
        
        try {
            const response = await fetch(USER_URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if(response.ok) {
                const responseData = await response.json();
                setUser(responseData.userData);
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            console.log("Error fetching user data");
        }
    }

    //get data from backend
    const getAchievements = async () => {
        try {
            const response = await fetch(ACHIEVEMENTS_URL, {
                method: "GET",
            });

            if(response.ok) {
                const responseData = await response.json();
                setAchievements(responseData.msg);
            }
        } catch (error) {
            console.log(`achievements ${error}`);
        }
    }

    useEffect(() => {
        getAchievements();
        userAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{
            isLoggedIn, 
            storeTokenInLS, 
            LogoutUser, 
            user, 
            achievements, 
            authorizationToken, 
            isLoading 
        }}>
            {children}
        </AuthContext.Provider>  
    );
};

// Export the context separately from where it's created
export { AuthContext };

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    return authContextValue;
}
import "../components/Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-hot-toast';
import { API_URL } from "../config";


const URL = `${API_URL}/api/auth/login`;

export const Login = () => {
    console.log('API URL:', import.meta.env.VITE_API_URL)

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value
        })

    }

    const handleSubmission = async (e) => {
        e.preventDefault();
        // console.log(user);

        try {

            const response = await fetch(URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(user),

            });

            const responseData = await response.json();

            if (response.ok) {
                toast.success(`Welcome, ${user.email.split('@')[0]}`);

                storeTokenInLS(responseData.token);

                setUser({ email: "", password: "", });
                navigate("/");
            } else {
                toast.error(responseData.extraError ? responseData.extraError :
                    responseData.message, {
                    progressStyle: { background: '#000000' },
                }
                );
            }

        } catch (error) {
            console.log("login: ", error);
        }
    }
    return (
        <div className="box">
            <h1>Login</h1>
            <div className="form-login">
                <form action="" method="POST" onSubmit={handleSubmission}>
                    <div className="email">
                        <label for='email'>Email</label>
                        <input
                            type="email"
                            required
                            placeholder="Enter Email"
                            name="email"
                            value={user.email}
                            onChange={handleInput}
                        ></input>
                    </div>
                    <div className="password">
                        <label for='email'>Password</label>
                        <input
                            type="password"
                            required
                            placeholder="Enter Password"
                            name="password"
                            value={user.password}
                            onChange={handleInput}
                        ></input>
                    </div>
                    <div className="forget-password">
                        <a href="#" aria-disabled>reset passowrd</a>
                    </div>
                    <div className="btn-login">
                        <button
                            className="btn"
                        >Login</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

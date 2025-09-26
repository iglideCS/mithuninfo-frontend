import '../components/Register.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-hot-toast';
import AOS from 'aos';
import { API_URL } from '../config';
AOS.init();

const URL = `${API_URL}/api/auth/register`;

export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    //handling input values

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleSubmission = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(user),
            });
            // console.log(response);

            const responseData = await response.json();
            console.log(responseData);
            if (response.ok) {
                toast.success("Registration Successfull!")
                storeTokenInLS(responseData.token);

                setUser({ username: "", email: "", password: "" });
                navigate("/");
            } else {
                toast.error(responseData.extraError ? responseData.extraError :
                    responseData.message
                );
            }

        } catch (error) {
            console.log("regsiter: ", error);
        }
    }


    return (
        <div className="box-reg">
            <h1>Sign-Up</h1>
            <div className='reg-form'>
                <form method='POST' onSubmit={handleSubmission}>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input
                            name="username"
                            type='text'
                            id='usernmae'
                            required
                            placeholder='Enter Username'
                            values={user.username}
                            onChange={handleInput}
                        ></input>
                    </div>
                    <div className="reg-email">
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            type='email'
                            placeholder='Enter Email'
                            required
                            id='email-reg'
                            values={user.email}
                            onChange={handleInput}
                        ></input>
                    </div>
                    <div className="reg-password">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            type='password'
                            placeholder='Enter Password'
                            id='password-reg'
                            required
                            values={user.password}
                            onChange={handleInput}
                        ></input>
                    </div>
                    <div className="reg-btn">
                        <button
                            type='submit'
                            className='rbtn'
                        >SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

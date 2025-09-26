import '../components/Contact.scss';
import contactImage from '../images/contact.webp';
import { useState } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-hot-toast';
import { API_URL } from "../config";


const URL = `${API_URL}/api/form/contact`;

const emptyContactForm = {
    username: "",
    email: "",
    message: "",
};

export const Contact = () => {
    const [contact, setContact] = useState(emptyContactForm);
    const [userData, setUserData] = useState(true);

    
    const { user } = useAuth();

    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserData(false);
    }

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]: value
        });
    };

    const handleSubmission = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                toast.success("Message sent Successfully");
                setContact({
                    ...contact,
                    message: "",
                });
                const responseData = await response.json();
                // console.log(responseData);
                setShowSuccess(true);
            }

            // console.log(response);

        } catch (error) {
            console.log("contact: ", error);
        }
    }

    return (
        <section>
            <div className='heading-contact'>
                <span>Contact Us</span>
            </div>
            <div className="container-contact">
                <div className="box-contact-img">
                    <img src={contactImage} alt='contact' />
                </div>
                <div className="box-contact-form">
                    <form method='POST' onSubmit={handleSubmission}>
                        <div className="username-contact" >
                            <label>Username</label>
                            <input
                                type="text"
                                id='username-cont'
                                required                               
                                name='username'
                                value={contact.username}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="email-contact" >
                            <label>Email</label>
                            <input
                                type="email"
                                id='email-cont'
                                required                                
                                name='email'
                                value={contact.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="message-contact">
                            <label>Message</label>
                            <textarea
                                name="message"
                                id="message-cont"
                                cols={50}
                                rows={7}
                                placeholder='Message Here....'
                                required                                
                                value={contact.message}
                                onChange={handleInput}
                            />
                        </div>
                        <div className='btn-contact'>
                            <button 
                            type='submit'
                            >Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

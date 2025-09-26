import '../components/Error.scss';
import { NavLink } from 'react-router-dom';
import error from '../images/error.webp';
import notFound from '../images/404.webp';


export const Error = () =>{
    return(
        <section>
            <div className="container-error">
                <div className="left-box-error">
                    <img src={error} alt='error' />
                </div>
                <div className="right-box-error">
                    <div className='error-404'>
                        <img src={notFound} alt='not found'/>
                        <h6 >Oops! You seem to be lost</h6>
                        <p >It looks like you've stumbled upon a page that doesn't exist. 
                                Don't worry, we're all lost sometimes!</p>
                        <ul>
                            <li  >
                            <NavLink to="/" >Return Home</NavLink >
                            </li>
                            <li>
                            <NavLink to="/contact">Report Issue</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

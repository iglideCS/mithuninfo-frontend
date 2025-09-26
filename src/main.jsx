import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './store/auth.jsx'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <StrictMode>
      <App />
      <Toaster

        position="top-right"
        reverseOrder={false}


        toastOptions={{
          error:{
            style: {
              padding: '10px',
              backgroundColor: 'red',
              color: 'white',
              width: 220,
              height: 32,
              fontSize: 17,
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              fontFamily: 'Poppins sans-serif'
            },
  
            iconTheme:{
              primary: 'white',
              secondary: 'red'
            }
          },
          success:{
            style: {
              padding: '10px',
              backgroundColor: 'rgb(120, 157, 188)',
              color: 'white',
              width: 220,
              height: 32,
              fontSize: 18,
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            },
  
            iconTheme:{
              primary: 'white',
              secondary: 'green'
            }
          }
        }}
      

      />
    </StrictMode>,
  </AuthProvider>
)

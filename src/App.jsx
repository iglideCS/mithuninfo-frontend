import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Achievement } from "./pages/Achievement";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./components/Layout/AdminLayout";
import { AdminUsers } from "./pages/AdminUsers";
import { AdminContacts } from "./pages/AdminContacts";
import { AdminAccess } from "./pages/AdminAccess";

const PageWrapper = () => {
  const location = useLocation();
  const hideFooterPaths = ['/login', '/register', '/contact'];
  const ShowFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/contacts" element={<AdminContacts />} />
          <Route path="/admin/access" element={<AdminAccess />} />
        </Route>
        <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {ShowFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <PageWrapper />
    </BrowserRouter>
  );
};

export default App;

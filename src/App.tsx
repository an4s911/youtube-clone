import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useState } from "react";
import { Slide, ToastContainer } from "react-toastify";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true",
    );
    const [userName, setUserName] = useState(
        (() => {
            const name = localStorage.getItem("userName");
            if (isLoggedIn && name) {
                return name;
            } else {
                return "";
            }
        })(),
    );
    const [email, setEmail] = useState(
        (() => {
            const email = localStorage.getItem("emailAddress");
            if (isLoggedIn && email) {
                return email;
            } else {
                return "";
            }
        })(),
    );

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userName");
        localStorage.removeItem("emailAddress");
        setIsLoggedIn(false);
        setUserName("");
        setEmail("");
    };

    return (
        <div id="app">
            <Sidebar />
            <Header
                isLoggedIn={isLoggedIn}
                userName={userName}
                email={email}
                handleLogout={handleLogout}
            />
            <Content
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setUserName={setUserName}
                setEmail={setEmail}
            />
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
        </div>
    );
}

export default App;

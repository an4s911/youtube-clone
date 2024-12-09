import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useState } from "react";

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

    return (
        <div id="app">
            <Sidebar />
            <Header isLoggedIn={isLoggedIn} userName={userName} />
            <Content
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setUserName={setUserName}
            />
        </div>
    );
}

export default App;

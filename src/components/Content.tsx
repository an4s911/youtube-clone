import { Route, Routes } from "react-router";
import SignIn from "./SignIn";

type ContentProps = {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    setUserName: (value: string) => void;
    setEmail: (value: string) => void;
};

function Content({
    isLoggedIn,
    setIsLoggedIn,
    setUserName,
    setEmail,
}: ContentProps) {
    return (
        <main>
            <Routes>
                <Route path="/" element={<h1>Content</h1>} />
                <Route
                    path="/signin"
                    element={
                        <SignIn
                            isLoggedIn={isLoggedIn}
                            setUserName={setUserName}
                            setIsLoggedIn={setIsLoggedIn}
                            setEmail={setEmail}
                        />
                    }
                />
            </Routes>
        </main>
    );
}

export default Content;

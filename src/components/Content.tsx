import { Link, Route, Routes } from "react-router";
import SignIn from "./SignIn";

type ContentProps = {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    setUserName: (value: string) => void;
    setEmail: (value: string) => void;
};

function AnonView() {
    return (
        <div className="w-full flex justify-center py-10">
            <div className="px-10 md:px-24 py-6 text-center bg-gray-800 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold">You are not signed in</h4>
                <p>
                    Please <Link to="/signin" className="text-blue-500">sign in</Link> to continue
                </p>
            </div>
        </div>
    );
}

function Content({
    isLoggedIn,
    setIsLoggedIn,
    setUserName,
    setEmail,
}: ContentProps) {
    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={isLoggedIn ? <h1>Content</h1> : <AnonView />}
                />
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

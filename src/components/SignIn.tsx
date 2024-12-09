import axios from "axios";
import { SiYoutube } from "@icons-pack/react-simple-icons";
import { FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router";

type SignInProps = {
    isLoggedIn: boolean;
    setUserName: (value: string) => void;
    setIsLoggedIn: (value: boolean) => void;
};

function SignIn({ isLoggedIn, setUserName, setIsLoggedIn }: SignInProps) {
    const [emailValue, setEmailValue] = useState("test@test.com");
    const [passwordValue, setPasswordValue] = useState("password123");
    const navigate = useNavigate();

    const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const URL = import.meta.env.VITE_API_URL;
        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        axios
            .post(URL + "signin/", data)
            .then((res) => {
                if (res.status === 200) {
                    setUserName(res.data.name);
                    setIsLoggedIn(true);
                    localStorage.setItem("isLoggedIn", "true");
                    localStorage.setItem("userName", res.data.name);
                    navigate("/");
                } else {
                    console.log(res.status);
                }
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    };

    // Check if user is already logged in
    if (isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="px-20 py-10 mx-auto border rounded-md border-white flex flex-col justify-center items-center bg-gray-800 w-max sm:w-96 h-2/3 gap-10">
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="logo">
                        <SiYoutube size={50} color="#FF0000" title="Youtube" />
                    </div>
                    <div className="signin-text">
                        <h1 className="text-3xl font-semibold">Sign in</h1>
                    </div>
                </div>
                <form
                    className="signin-form flex flex-col items-center gap-10 w-full"
                    onSubmit={handleSignIn}
                >
                    <div className="flex flex-col items-center justify-center gap-3 w-full">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)}
                            required
                        />
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-10 py-3"
                    >
                        SignIn
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;

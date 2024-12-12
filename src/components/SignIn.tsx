import axios from "axios";
import { SiYoutube } from "@icons-pack/react-simple-icons";
import { FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type SignInProps = {
    isLoggedIn: boolean;
    setUserName: (value: string) => void;
    setIsLoggedIn: (value: boolean) => void;
    setEmail: (value: string) => void;
};

function SignIn({
    isLoggedIn,
    setUserName,
    setIsLoggedIn,
    setEmail,
}: SignInProps) {
    const [emailValue, setEmailValue] = useState("test@test.com");
    const [passwordValue, setPasswordValue] = useState("password123");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const URL = import.meta.env.VITE_API_URL;
        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        toast.promise(
            axios
                .post(URL + "signin/", data)
                .then((res) => {
                    if (res.status === 200) {
                        setEmail(res.data.email);
                        setUserName(res.data.name);
                        setIsLoggedIn(true);
                        localStorage.setItem("isLoggedIn", "true");
                        localStorage.setItem("userName", res.data.name);
                        localStorage.setItem("emailAddress", res.data.email);
                        navigate("/");
                    } else {
                        console.log(res.status);
                    }
                })
                .catch((err) => {
                    console.log(err.response.data.error);
                })
                .finally(() => setIsLoading(false)),
            {
                pending: "Signing in...",
                success: "Signed in successfully",
                error: "Something went wrong",
            },
            {},
        );
    };

    // Check if user is already logged in
    if (isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="relative px-20 py-10 mx-auto border rounded-md border-white flex flex-col justify-center items-center bg-gray-800 w-max sm:w-96 h-2/3 gap-10">
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="logo">
                        <SiYoutube size={50} color="#FF0000" title="Youtube" />
                    </div>
                    <div className="signin-text">
                        <h1 className="text-3xl font-semibold">Sign in</h1>
                    </div>
                </div>
                {isLoading && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max h-max">
                        <Loader2 className="animate-spin h-20 w-20 opacity-50" />
                    </div>
                )}
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
                            disabled={isLoading}
                            required
                        />
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-10 py-3"
                        disabled={isLoading}
                    >
                        SignIn
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;

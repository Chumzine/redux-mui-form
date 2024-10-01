import { useDispatch } from "react-redux";
import { login } from "../features/login/loginSlice";
import { useState, useEffect } from "react";


export const useLogin = () => {
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (values) => {
        const { email, password } = values;

        const userCredentials = {
            email: "user@example.com",
            password: "password123"
        }

        setSuccess(false);
        setError("");

        if (email === userCredentials.email && password === userCredentials.password) {
            dispatch(login({ email, password }));
            setSuccess(true);
        } else {
            setError("Invalid email or password. Please try again.");
        }
    };

    useEffect(() => {
        if (error || success) {
            const timer = setTimeout(() => {
                setError("");
                setSuccess(false);
            }, 5000);

            return () => clearTimeout(timer); 
        }
    }, [error, success]);

    return { handleLogin, success, error };
};
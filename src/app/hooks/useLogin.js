import { useDispatch } from "react-redux";
import { login } from "../features/login/loginSlice";
import { toast } from "react-toastify";

export const useLogin = () => {
    const dispatch = useDispatch();

    const handleLogin = (values) => {
        const { email, password } = values;

        const userCredentials = {
            email: "user@example.com",
            password: "password123"
        }

        if (email === userCredentials.email && password === userCredentials.password) {
            dispatch(login({ email, password }));
            toast.success("Login successful");
        } else {
            toast.error("Invalid email or password");
        }
    };

    return { handleLogin };
};
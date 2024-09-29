import { Formik } from 'formik';
import { Button, TextField, Typography, FormLabel, Box } from '@mui/material';
import * as Yup from 'yup';
import { useLogin } from '../../hooks/useLogin';
import { ToastContainer } from 'react-toastify';
import { theme } from './mui-theme';
import { ThemeProvider } from '@mui/material/styles';

const validationSchema = Yup.object({
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    password: Yup.string().required("Password is required").min(8, "Must be at least 8 characters")
})

export const LoginForm = () => {
    const { handleLogin } = useLogin();

    return (
        <ThemeProvider theme={theme}>
            <main>
                <Box
                    sx={{
                        width: 400,
                        margin: 'auto',
                        padding: 4,
                        backgroundColor: '#09090b',
                        borderRadius: 3,
                        border: '1px solid #848486'
                    }}
                >
                    <Typography color="#f9f9fb" variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <Typography variant="body1" color="#7e7d82" gutterBottom>
                        Enter your email below to login to your account.
                    </Typography> 
                    <Formik
                        initialValues = {{ email: "", password: ""}}
                        validationSchema={validationSchema}
                        onSubmit = {(values) => handleLogin(values)}
                    >
                        {({ values, errors, touched, handleChange,
                        handleBlur, handleSubmit, isSubmitting }) => {
                            return (
                                <form onSubmit={handleSubmit}>
                                    <FormLabel component="legend" sx={{ mt: 4, mb: 1 }}>Email</FormLabel>
                                    <TextField
                                        fullWidth
                                        margin="none"
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={values.email}
                                        placeholder="m@example.com"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                                    <FormLabel component="legend" sx={{ mt: 3, mb: 1 }}>Password</FormLabel>
                                    <TextField
                                        fullWidth
                                        margin="none"
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        type="submit"
                                        sx={{ mt: 4,
                                        }}
                                        >
                                        Sign In
                                    </Button>
                                </form>
                            )}
                        }
                    </Formik>
                </Box>
                <ToastContainer />
            </main>
        </ThemeProvider>
    );
}
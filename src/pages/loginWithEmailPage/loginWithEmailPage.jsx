import React from "react";
import AuthLayout from '../../components/layouts/auth/authLayout';
import LoginWithEmailComponent from "../../components/loginWithEmailComponent/loginWithEmailComponent";

const LoginWithEmailPage = () => (
    <AuthLayout>
        <LoginWithEmailComponent />
    </AuthLayout>
);

export default LoginWithEmailPage;
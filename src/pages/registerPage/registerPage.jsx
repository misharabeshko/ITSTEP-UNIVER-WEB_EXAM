import React from 'react';
import AuthLayout from '../../components/layouts/auth/authLayout';
import RegisterComponent from '../../components/registerComponent/registerComponent';

const RegisterPage = () => (
    <AuthLayout>
        <RegisterComponent />
    </AuthLayout>
);

export default RegisterPage;
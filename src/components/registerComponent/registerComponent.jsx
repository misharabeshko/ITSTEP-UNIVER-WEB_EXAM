import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './registerComponent.css';

const RegisterComponent = () => {
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(2, 'Too Short!')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .required('Required'),
        }),
        onSubmit: (values) => {
            console.log('Form data:', values);
        },
    });




    return (
        <div className="form-center-wrapper">
            <h1 className="title">Sign up</h1>
            <p className="subtitle">Create a free account with your email.</p>

            <form onSubmit={formik.handleSubmit} className="form-body">
                {/* Full Name */}
                <div className="input-wrap">
                    <input
                        type="text"
                        placeholder="Full Name"
                        {...formik.getFieldProps('fullName')}
                        className={formik.touched.fullName && formik.errors.fullName ? 'error-border' : ''}
                    />
                    {formik.touched.fullName && formik.errors.fullName && (
                        <div className="error-message">{formik.errors.fullName}</div>
                    )}
                </div>

                {/* Email */}
                <div className="input-wrap">
                    <input
                        type="email"
                        placeholder="Email"
                        {...formik.getFieldProps('email')}
                        className={formik.touched.email && formik.errors.email ? 'error-border' : ''}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="error-message">{formik.errors.email}</div>
                    )}
                </div>

                {/* Password */}
                <div className="input-wrap pass-wrap">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...formik.getFieldProps('password')}
                        className={formik.touched.password && formik.errors.password ? 'error-border' : ''}
                    />
                    <button
                        type="button"
                        className="eye-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                    {formik.touched.password && formik.errors.password && (
                        <div className="error-message">{formik.errors.password}</div>
                    )}
                </div>

                <button type="submit" className="submit-button">
                    Create your free account
                </button>
            </form>

            <p className="login-link">
                Already have an account? <Link to="/login">Sign in</Link>
            </p>
        </div>
    );
};

export default RegisterComponent;
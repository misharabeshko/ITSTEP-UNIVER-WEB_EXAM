import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './loginWithEmailComponent.css';

const LoginWithEmailComponent = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .required('Required'),
        }),
        onSubmit: (values) => {
            console.log('Email submitted:', values);

        },
    });

    return (
        <div className="form-center-wrapper">
            <h1 className="title">Enter email</h1>
            <p className="subtitle">
                Enter the email address associated with your account.
            </p>

            <form onSubmit={formik.handleSubmit} className="form-body">
                <div className="input-wrap">
                    <input
                        type="email"
                        placeholder="Email"
                        {...formik.getFieldProps('email')}
                        className={formik.touched.email && formik.errors.email ? 'error-border' : ''}
                        autoFocus
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="error-message">{formik.errors.email}</div>
                    )}
                </div>

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
                    Continue
                </button>
            </form>

            <div className="navigation-footer">
                <p className="login-link">
                    <Link to="/login" className="back-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to all options
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginWithEmailComponent;
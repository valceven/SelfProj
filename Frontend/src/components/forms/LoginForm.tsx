'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { submitLoginForm } from '@/api/loginService';
import { useAuth } from '@/context/AuthContext';

interface FormValues {
    username: string;
    password: string;
};

const LoginForm = () => {
    const { login } = useAuth();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const formik = useFormik<FormValues>({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username is required'),
            password: Yup.string()
                .required('Password is required')
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setErrorMessage(null);
            try {
                const result = await submitLoginForm(values);
                if (result.token.success) {
                    login(result.token.token, values.username);
                } else {
                    setErrorMessage(result.token.message);
                }
                resetForm();
            } catch (error) {
                console.error('Form submission error: ', error);
                setErrorMessage("An unxpected error occured. Please try again.");
            } finally {
                setSubmitting(false);
            }
        }
    });
  return (
    <div className='h-2/3 w-1/4 rounded-2xl p-6 flex flex-col items-center justify-center'>
        <div className='mb-5'>
            <h1 className='text-xl font-bold text-gray-900 text-center'>Login to Ribeval</h1>
        </div>
        <div className='w-full bg-accent1 p-6 rounded-xl'>
            <form onSubmit={formik.handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 gap-6'>
                    <div className='space-y-3'>
                        <label htmlFor="username" className='px-1'>Username or email</label>
                        <input 
                            type="text"
                            name="username"
                            placeholder='Username'
                            className={`w-full px-4 py-2 rounded-lg border ${
                                formik.touched.username && formik.errors.username
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                            } focus:outline-none focus:ring-2 foxus:ring-opacity-50`}
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            />
                            {formik.touched.username && formik.errors.username && (
                                <p className='mt-1 text-sm text-red-500'>{formik.errors.username}</p>
                            )}
                    </div>
                    <div className='space-y-3'>
                        <label htmlFor="password" className='px-1'>Password</label>
                        <input 
                            type="text"
                            name="password"
                            placeholder='Password'
                            className={`w-full px-4 py-2 rounded-lg border ${
                                formik.touched.password && formik.errors.password
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                            } focus:outline-none focus:ring-2 foxus:ring-opacity-50`}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <p className='mt-1 text-sm text-red-500'>{formik.errors.password}</p>
                            )}
                    </div>
                    <p className='text-red-500 text-center'>{errorMessage}</p>
                    <div className='flex justify-center'>
                        <button
                            type='submit'
                            disabled={formik.isSubmitting}
                            className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none'
                        >
                            {formik.isSubmitting ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default LoginForm
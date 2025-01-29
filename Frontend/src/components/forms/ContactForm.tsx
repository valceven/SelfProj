'use client'

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { submitContactForm } from '@/api/contactService';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  //countryCode: string;
  phone: string;
  message: string;
}

const COUNTRY_CODES = [
  { value: '+1', label: 'USA (+1)' },
  { value: '+44', label: 'UK (+44)' },
  { value: '+91', label: 'India (+91)' },
  { value: '+62', label: 'Indonesia (+62)' },
  { value: '+63', label: 'Philippines (+63)' },
] as const;

const ContactForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      //countryCode: '+63',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'First name must only contain letters and spaces')
        .required('First name is required'),
      lastName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Last name must only contain letters and spaces')
        .required('Last name is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      countryCode: Yup.string()
        .required('Country code is required'),
      phoneNumber: Yup.string()
        .matches(/^\d+$/, 'Phone number must only contain digits')
        .required('Phone number is required'),
      message: Yup.string()
        .max(500, 'Message cannot exceed 500 characters')
        .required('Message is required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const result = submitContactForm(values);
        console.log(`Form Submitted Sucessfully ${result}`);
        resetForm();
      } catch (error) {
        console.error('Form submission error:', error);
        alert('An error occurred while submitting the form. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Get in Touch</h1>
        <p className="text-sm text-gray-500 mt-2">You can reach us anytime</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className={`w-full px-4 py-2 rounded-lg border ${
                formik.touched.firstName && formik.errors.firstName
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className={`w-full px-4 py-2 rounded-lg border ${
                formik.touched.lastName && formik.errors.lastName
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.lastName}</p>
            )}
          </div>
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className={`w-full px-4 py-2 rounded-lg border ${
              formik.touched.email && formik.errors.email
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
          )}
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <select
            name="countryCode"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none bg-white"
            //value={formik.values.countryCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {COUNTRY_CODES.map((code) => (
              <option key={code.value} value={code.value}>
                {code.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            className={`w-full px-4 py-2 mt-4 md:mt-0 rounded-lg border ${
              formik.touched.phone && formik.errors.phone
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.phone}</p>
          )}
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Write your message here"
            className={`w-full px-4 py-2 rounded-lg border ${
              formik.touched.message && formik.errors.message
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-opacity-50 h-32 resize-none`}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.message}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {formik.isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

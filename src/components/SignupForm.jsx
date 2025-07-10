import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import '../App.css';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .matches(/[0-9]/, "Must include a number")
        .matches(/[!@#$%^&*]/, "Must include a special character")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      alert("Registration Successful!");
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form-container">
      <h2>Sign Up</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.fullName && formik.errors.fullName && (
        <p className="error">{formik.errors.fullName}</p>
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && (
        <p className="error">{formik.errors.email}</p>
      )}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password && (
        <p className="error">{formik.errors.password}</p>
      )}

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <p className="error">{formik.errors.confirmPassword}</p>
      )}

      <button type="submit" disabled={!formik.isValid}>Register</button>
    </form>
  );
};

export default SignupForm;

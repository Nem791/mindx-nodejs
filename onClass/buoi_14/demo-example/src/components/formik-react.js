import React, { useState } from "react";

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is required'),
    email: Yup.string().email('Invalid email').required('This field is required'),
    areaCode: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is required'),
    phone: Yup.number()
        .integer()
        .min(2, 'Too Short!')
        .required('This field is required'),
    address: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is required'),
    city: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is required'),
    country: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is required')
});

const FormikReact = () => {
    const [members, setMembers] = useState([]);
    return (
        <div>
            <h1>Membership Registration Form</h1>
            <Formik
                initialValues={{ firstName: 'Van A', lastName: 'Nguyen', email: 'a@gmail.com', areaCode: '+84', phone: 45768768, address: 'Ha Noi', city: 'Ha Noi', country: 'Vietnam', address2: '' }}
                // validate={validateForm}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('submit-', values);
                    setMembers([...members, values]);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Start of form  */}
                        <div className="address-container">

                            <label>Full Name</label>
                            <div className="address">
                                <div className="split-input">
                                    <span>
                                        <input
                                            type="text"
                                            name="firstName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                        />
                                        <br />
                                        <label className="input-label">First Name</label>
                                        {errors.firstName && touched.firstName ? (
                                            <div className="error">{errors.firstName}</div>
                                        ) : null}
                                    </span>
                                    <span>
                                        <input
                                            type="text"
                                            name="lastName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                        />
                                        <br />
                                        <label className="input-label">Last Name</label>
                                        {errors.lastName && touched.lastName ? (
                                            <div className="error">{errors.lastName}</div>
                                        ) : null}
                                    </span>
                                </div>
                                {errors.age && touched.age && errors.age}
                            </div>
                        </div>

                        <div className="address-container">

                            <label>Email</label>
                            <div className="address">
                                <div className="single-input">
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <br />
                                    <label className="input-label">Email</label>
                                    {errors.email && touched.email ? (
                                        <div className="error">{errors.email}</div>
                                    ) : null}
                                </div>

                            </div>
                        </div>

                        <div className="address-container">

                            <label>Phone Number</label>
                            <div className="address">
                                <div className="split-input">
                                    <span>
                                        <input
                                            type="text"
                                            name="areaCode"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.areaCode}
                                        />
                                        <br />
                                        <label className="input-label">Area Code</label>
                                        {errors.areaCode && touched.areaCode ? (
                                            <div className="error">{errors.areaCode}</div>
                                        ) : null}
                                    </span>
                                    <span>
                                        <input
                                            type="text"
                                            name="phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone}
                                        />
                                        <br />
                                        <label className="input-label">Phone Number</label>
                                        {errors.phone && touched.phone ? (
                                            <div className="error">{errors.phone}</div>
                                        ) : null}
                                    </span>
                                </div>
                            </div>
                            <div></div>
                        </div>

                        <div className="address-container">

                            <label>Address</label>
                            <div className="address">
                                <div className="single-input">
                                    <input
                                        type="text"
                                        name="address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}
                                    />
                                    <br />
                                    <label className="input-label">Street Address 1</label>
                                    {errors.address && touched.address ? (
                                        <div className="error">{errors.address}</div>
                                    ) : null}
                                </div>
                                <div className="single-input">
                                    <input
                                        type="text"
                                        name="address2"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address2}
                                    />
                                    <br />
                                    <label className="input-label">Street Address 2 (optional)</label>
                                </div>

                                <div className="split-input">
                                    <span>
                                        <input
                                            type="text"
                                            name="city"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.city}
                                        />
                                        <br />
                                        <label className="input-label">City</label>
                                        {errors.city && touched.city ? (
                                            <div className="error">{errors.city}</div>
                                        ) : null}
                                    </span>
                                    <span>
                                        {/* <input
                                            type="age"
                                            name="age"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.age}
                                        /> */}
                                        <select>
                                            <option>Vietnam</option>
                                            <option>Not Vietnam</option>
                                        </select>
                                        <br />
                                        <label className="input-label">Street Address</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <br />
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
            <div>
                {members.map((member, index) => {
                    return (
                        <div key={index}>
                            <h4>{member.firstName}{member.lastName}</h4>
                            <h4>{member.email}</h4>
                            <h4>{member.areaCode}</h4>
                            <h4>{member.phone}</h4>
                            <h4>{member.address}</h4>
                            <h4>{member.address2}</h4>
                            <h4>{member.city}</h4>
                            <h4>{member.country}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FormikReact;
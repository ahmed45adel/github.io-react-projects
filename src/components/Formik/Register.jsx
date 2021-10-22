

import React from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import FormikField from "./FormikField";
import { Link } from "react-router-dom";
import { initialValues, onSubmit, validationSchema } from "./FormConstants";
const SignUp = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {(formik) => {
                return (
                    <Form>
                        <div style={{ padding: 20 }}>
                            <FormikField label="User Name" name="userName" type="text" />
                            <FormikField label="Email" name="email" type="email" />
                            <FormikField label="Password" name="password" type="password" />
                            <FormikField label="Confirm Password" name="confirmPassword" type="password" />
                            <FormikField
                                label="active"
                                name="active"
                                type="checkbox"
                            />
                            <div>
                                <span>Gender</span>
                                <select
                                    type="select"
                                    label="gender"
                                    name="gender"
                                >
                                    <option disabled></option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <FieldArray name="hobbies">
                                    {fieldArrayProps => {
                                        const { push, remove, form } = fieldArrayProps
                                        const { values } = form
                                        const { hobbies } = values
                                        return (<div>
                                            <h5>Hobbies</h5>
                                            {hobbies.map((hobby, index) => (
                                                <div key={index}>
                                                    <Field name={`hobbies[${index}]`} />
                                                    {
                                                        index > 0 &&
                                                        <button type="button" onClick={() => remove(index)} >-</button>
                                                    }
                                                    <button type="button" onClick={() => push('')}>+</button>
                                                </div>
                                            ))}
                                        </div>)
                                    }
                                    }
                                </FieldArray>
                            </div>
                        </div>
                        <button className="text-center">submit</button>
                        Have an account?
                        <Link to="/login" >Login</Link>
                    </Form>
                );
            }}
        </Formik>
    );
};
export default SignUp;
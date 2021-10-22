import React from "react";
import { Formik, Form } from "formik";
import FormikField from "./FormikField";
import { Link } from "react-router-dom";
import { initialValues, onSubmit, validationSchema } from "./FormConstants";
const Login = () => {

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
                            <FormikField label="Email" name="email" type="email" />
                            <FormikField label="Password" name="password" type="password" />
                            <FormikField
                                label="Remember Me"
                                name="rememberMe"
                                type="checkbox"
                            />
                        </div>
                        <button className="text-center">submit</button>
                        Not a User?
                        <Link to="/signup" >Signup</Link>
                    </Form>
                );
            }}

        </Formik>
    );
};
export default Login;
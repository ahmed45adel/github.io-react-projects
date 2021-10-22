import * as yup from "yup";
export const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    active: false,
    gender: "",
    hobbies: ["Learning"
    ]
};
export const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));

export const validationSchema = yup.object({
    userName: yup.string().required("UserName field is required"),
    email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Email field is required"),
    password: yup.string().required("Password field is required")
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)

            , 'Minimum eight characters, at least one uppercase letter, one lowercase letter,one number and one special character'),
    confirmPassword: yup
        .string()
        .required("required")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    gender: yup.string().required("required")
});
import * as yup from "yup";

export const schema = yup.object()({
        Name: yup
        .string()
        .required("Please Enter firstname"),
        email: yup
        .string()
        .email()
        .required(),
        Telephone: yup
        .number()
        .positive()
        .min(10, "too short")
        .max(10, "too long")
        .required(),
        password: yup
        .string()
        .min(4)
        .max(15)
        .required(),
        cpassword: yup
        .string()
        .oneOf([yup.ref('password'), null, "password must match"])
        .required(),
        // state: yup
        // .string()
        // .oneOf(["nepal","india","china","japan"],"Please Select State")
        Subject: yup
        .string()
        .required(),
        Message: yup
        .string()
        .required()
    })


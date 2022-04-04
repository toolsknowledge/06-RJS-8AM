import { Form, Formik } from "formik";
import React from "react";
import FormController from "./components/FormController";
import * as Yup from "yup";
function MyForm(){

    const initialValues = {
        "fname":"",
        "lname":"",
        "email":""
    };

    const validationSchema = Yup.object({
        "fname" : Yup.string().required("First Name is Required !").min(5,"Minimum 5 characters are required !").max(10,"Maximum 10 Characters are allowed"),
        "lname" : Yup.string().required("Last Name is Required !").min(5,"Minimum 5 characters are required !").max(10,"Maximum 10 Characters are allowed"),
        "email" : Yup.string().required("Email is Required !").email("Invalid Email")
    });

    const onSubmit = values =>{
        console.log(values);
    }

    return(
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {(formik)=>{
                return(
                    <Form>
                        <FormController control="input" name="fname" id="fname" type="text" label="First Name"></FormController>
                        <br></br>
                        <FormController control="input" name="lname" id="fname" type="text" label="Last Name"></FormController>
                        <br></br>
                        <FormController control="input" name="email" id="email" type="email" label="Email"></FormController>
                        <br></br>
                        <button type="submit" disabled={!formik.isValid}>Register</button>
                    </Form>
                )
            }}                    
        </Formik>
    )
}
export default MyForm;
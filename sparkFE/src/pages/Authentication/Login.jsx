import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginUserAction } from "../../Redux/Auth/authAction";

const initialValues = { email: "", password: "" };
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be min 6 characters")
    .required("Password is required"),
});  
const Login = () => {
  const [formValue, setFormValue] = useState();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleSubmit = (values) => {
    setFormValue(values);
    console.log("handleSubmit", values);  
    dispatch(loginUserAction({data:values}));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="email"
                component={"div"}
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="password"
                component={"div"}
                className="text-red-500"
              />
            </div>
            
          </div>
          <Button
            sx={{ padding: ".8rem 0rem" }}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Form>
      </Formik>
      <div className="flex gap-2 items-center justify-center pt-5">
        <p>If you dont have accout ?</p>
        <Button onClick={()=>navigate("/register")}>Register</Button>
      </div>
    </>
  );
};

export default Login;

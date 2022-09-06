import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function Login() {
    const initialValues = {
        username: "",
        password: ""
      };
      const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).required()
      });
      const onSubmit = () => {
        console.log("yay!")

      }
  return (
    <div className="justify-center space-y-4">
      <h2 className='text-3xl font-bold underline'>Voting System</h2>
      <div>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit = {onSubmit}
      >
        <Form className="flex justify-center flex-col space-y-4 border-2 pt-1 h-80">
          
          <div>
          <label>Username: </label>
          <Field className= "border-2 h-10 w-60"
            autoComplete="off"
            id="inputlog"
            name="username"
            placeholder="John123..."
          />
          <div className='ml-2 text-red-600'>
          <ErrorMessage  name="username" component="span" />
          </div>
          
          </div>
          <div>
          <label>Password: </label>
          <Field
            className= "border-2 h-10 w-60"
            autoComplete="off"
            id="inputlog"
            name="password"
            placeholder="*******"
            type = "password"
          />
          <div className='ml-2 text-red-600'>
          <ErrorMessage name="password" component="span" />
          </div>
          
          </div>

          <button type="submit">Login</button>
        
        </Form>

      </Formik>
      </div>

    </div>
  )
}

export default Login
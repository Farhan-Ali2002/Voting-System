import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom"
function Login() {
    const initialValues = {
        username: "",
        password: ""
      };
      const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).matches(/^[A-Za-z][A-Za-z0-9_]{7,29}$/,"invalid username!").required(),
        password: Yup.string().min(4).required()
      });
      const onSubmit = () => {
        console.log("yay!")

      }
  return (
    <div className="mt-[100px]">
      <h2 className='text-3xl font-bold  text-gray-50 relative left-[4rem] bottom-4'>Voting System</h2>
      <div>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit = {onSubmit}
      >
        <Form className='p-6 max-w-sm w-[21rem]  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
          <div className="flex justify-center gap-6 mb-6 flex-col ">
          <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Username: </label>
          <Field className= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[16rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Password: </label>
          <Field
            className= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[16rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          </div>
          <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative left-[6rem] top-3" type="submit">Login</button>
          
        </Form>
        

      </Formik>
      </div>

    </div>
  )
}

export default Login
import "./App.css";

import { Formik } from "formik";
import ContactForm from "./components/ContactForm";
import * as Yup from 'yup';

function App() {
  const ErrorSchema = Yup.object().shape({
    username:Yup.string().required("Name is required").min(2,"too short"),
    email:Yup.string().email("Invalid enail").required("Required"),
    phone: Yup.string()
    .matches(
      /((09|03|07|08|05)+([0-9]{8})\b)/g,
      "Not a Phone number"
    )
    .required("Required"),
    message:Yup.string().min(5,"too short").max(100, "too long").required("Required")
  })
  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">Contact Form</h1>
          <Formik
            initialValues={{
              username: "",
              email:"",
              phone:"",
              message:""
            }}
            onSubmit={(value,{resetForm}) => {
              console.log(value);
              resetForm();
            }}
            validationSchema={ErrorSchema}
            component={ContactForm}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

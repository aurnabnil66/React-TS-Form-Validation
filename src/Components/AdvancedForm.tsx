import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";

interface FormValues {
  username: string;
}

function AdvancedForm() {
  const handleSubmit = (values: FormValues) => {
    // Perform some action with the form values
    console.log("Form submitted with values:", values);
  };
  return (
    <Formik initialValues={{ username: "jared" }} onSubmit={handleSubmit}>
      {(props) => (
        <Form>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          ></CustomInput>
          {/* <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          /> */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default AdvancedForm;

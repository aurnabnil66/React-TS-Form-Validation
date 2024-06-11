import { Form, Formik, FormikHelpers } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../Schemas";
import CustomSelect from "./CustomSelect";
import React from "react";
import CustomCheckbox from "./CustomCheckBox";

interface FormValues {
  username: string;
  jobType: string;
  acceptedTos: string;
}

function AdvancedForm() {
  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    // Perform some action with the form values
    // Handle form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: "" }}
      validationSchema={advancedSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          ></CustomInput>
          <CustomSelect
            label="Job Type"
            name="Job Type"
            placeholder="Please Select a Job"
          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          {/* <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          /> */}
          <CustomCheckbox type="checkbox" name="acceptedTos"></CustomCheckbox>
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default AdvancedForm;

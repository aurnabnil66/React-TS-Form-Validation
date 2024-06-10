import { useFormik } from "formik";
import { BasicSchema } from "../Schemas";

const onSubmit = () => {
  // Handle form submission
  console.log("submitted");
};

function BasicForm() {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: BasicSchema,
    });
  console.log(errors);
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""} // errors.email ? it means thereis an error in the email
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor="age">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;

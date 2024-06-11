import { useField } from "formik";

interface CustomCheckBoxProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
}

const CustomCheckbox = ({ label, ...props }: CustomCheckBoxProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>I accept the terms of service</span>
      </div>

      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomCheckbox;

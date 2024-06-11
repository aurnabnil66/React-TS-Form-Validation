import { useField } from "formik";

interface CustomSelectProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  children: React.ReactNode;
}

const CustomSelect = ({ label, ...props }: CustomSelectProps) => {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default CustomSelect;

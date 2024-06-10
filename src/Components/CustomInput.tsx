import { useField } from "formik";

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const CustomInput = ({ label, ...props }: CustomInputProps) => {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <>
      <label>{label}</label>
      <input {...field} {...props} />
    </>
  );
};

export default CustomInput;

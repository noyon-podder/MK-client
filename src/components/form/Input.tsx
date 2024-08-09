import { useFormContext } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const Input = ({ type, name, label }: TInputProps) => {
  const { register } = useFormContext();

  return (
    <div style={{ marginBottom: "20px" }}>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} id={name} {...register(name)} />
    </div>
  );
};

export default Input;

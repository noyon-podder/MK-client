import { useFormContext } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
};

const Input = ({ type, name, label, placeholder }: TInputProps) => {
  const { register } = useFormContext();

  return (
    <div style={{ marginBottom: "20px" }}>
      {label && (
        <label
          htmlFor={name}
          className="text-[15px] font-medium text-gray-500 mb-[6px] block"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        {...register(name)}
        className="w-full bg-transparent px-4 h-[38px] border border-borderColor outline-none rounded-[6px] focus:border-gray-700 text-sm text-gray-600"
      />
    </div>
  );
};

export default Input;

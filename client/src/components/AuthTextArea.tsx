
import React, { ChangeEvent } from "react";

type AuthTextAreaProps = {
  heading: string;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  value: string | number;
  placeholder?: string;
  required?: boolean;
};

const AuthTextArea: React.FC<AuthTextAreaProps> = ({
  heading,
  formData,
  setFormData,
  value,
  placeholder,
  required = false,
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setFormData((prevData: any) => ({
      ...prevData,
      [value]: inputValue,
    }));
  };

  const inputType = `${formData?.[value]}`;

  return (
    <div className="relative">
      <div className="font-semibold text-xs flex text-black ml-1">
        {heading}
        {required && (
          <p className="ml-1 text-xxs text-[#3BD188]">✷</p>
        )}
      </div>
      <textarea
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full h-20 border border-pot-black px-2 border-t-0 border-l-0 border-r-0 hover:border-t-0 hover:border-l-0 hover:border-r-0 outline-none text-md bg-white text-black font-normal hover:border-2 hover:border-[#3BD188] hover:border-opacity-50 focus:bg-white focus:border-[#3BD188] placeholder:text-[#A2A2A2] placeholder:text-sm active:border-b-[#A2A2A2]"
        value={formData?.[value] || ""}
        required
      />
    </div>
  );
};

export default AuthTextArea;

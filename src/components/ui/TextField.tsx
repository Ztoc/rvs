import React from 'react';

interface TextFieldProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  type?: 'text' | 'email' | 'tel' | 'password';
}

const TextField = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  error,
  type = 'text'
}: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-y-[10px]">
      <label
        htmlFor={id}
        className="text-black text-[12px] leading-[18px] font-medium uppercase"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`text-black text-[18px] leading-[24px] font-normal rounded-[10px] py-[18px] px-6 focus:outline-none focus:ring-2 focus:ring-rvs-green transition-all
          ${error ? 'border-red-500 border-[1px]' : 'border-[#bababa] border-[1px]'}
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextField;

import React from 'react';

interface TextInputProps {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  type: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  id,
  placeholder,
  type,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required={true}
      />
    </div>
  );
};

export const Checkbox = ({ id, label }: { id: string; label: string }) => {
  return (
    <div className="flex items-center mb-2">
      <input type="checkbox" id={id} className="text-green-600" />
      <label
        htmlFor={id}
        className="ml-2 text-sm font-medium capitalize text-gray-900 dark:text-white"
      >
        {label}
      </label>
    </div>
  );
};

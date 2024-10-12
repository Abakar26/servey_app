// src/components/ButtonGroup.tsx
import React from 'react';

interface ButtonGroupProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ options, value, onChange }) => {
  return (
    <div className="flex flex-wrap lg:space-x-2 lg:space-y-0 lg:flex-row space-y-2 flex-col">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onChange(option)}
          className={`px-4 py-2 border rounded ${value === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;

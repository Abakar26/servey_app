// src/components/DateOfBirthInput.tsx
import React, { useState } from 'react';

interface DateOfBirthInputProps {
  value: { day: string; month: string; year: string };
  onChange: (value: { day: string; month: string; year: string }) => void;
}

const DateOfBirthInput: React.FC<DateOfBirthInputProps> = ({ value, onChange }) => {
  const [day, setDay] = useState(value.day);
  const [month, setMonth] = useState(value.month);
  const [year, setYear] = useState(value.year);

  // Helper function to validate and set day, month, year
  const handleChange = (type: 'day' | 'month' | 'year', inputValue: string) => {
    let updatedValue = inputValue;

    if (type === 'day' && (Number(inputValue) < 1 || Number(inputValue) > 31)) {
      updatedValue = '';
    }
    if (type === 'month' && (Number(inputValue) < 1 || Number(inputValue) > 12)) {
      updatedValue = '';
    }
    if (type === 'year' && (Number(inputValue) < 1920 || Number(inputValue) > 2006)) {
      updatedValue = '';
    }

    // Update state and call the onChange prop to update parent component
    switch (type) {
      case 'day':
        setDay(updatedValue);
        onChange({ day: updatedValue, month, year });
        break;
      case 'month':
        setMonth(updatedValue);
        onChange({ day, month: updatedValue, year });
        break;
      case 'year':
        setYear(updatedValue);
        onChange({ day, month, year: updatedValue });
        break;
    }
  };

  return (
    <div className="flex space-x-4">
      <input
        type="number"
        value={day}
        onChange={(e) => handleChange('day', e.target.value)}
        placeholder="DD"
        className="border px-2 py-1 rounded"
        min={1}
        max={31}
      />
      <input
        type="number"
        value={month}
        onChange={(e) => handleChange('month', e.target.value)}
        placeholder="MM"
        className="border px-2 py-1 rounded"
        min={1}
        max={12}
      />
      <input
        type="number"
        value={year}
        onChange={(e) => handleChange('year', e.target.value)}
        placeholder="YYYY"
        className="border px-2 py-1 rounded"
        min={1920}
        max={2006}
      />
    </div>
  );
};

export default DateOfBirthInput;

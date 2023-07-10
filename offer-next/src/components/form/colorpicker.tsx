import { useState, FC, ChangeEvent } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';

interface ColorPickerProps {
  onColorChange: (color: string) => void;
}

const ColorPicker: FC<ColorPickerProps> = ({ onColorChange }) => {
  const [color, setColor] = useState('');

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    onColorChange(newColor); // Wywołanie funkcji zwrotnej z wartością koloru
  };

  return (
    <div className="flex flex-col items-center">
      <HexColorPicker color={color} onChange={handleColorChange} />
      <HexColorInput
        className="mt-6 w-full border-2 border-white bg-transparent p-2 focus:outline-none group-[.invalid]:border-red-500"
        color={color}
        prefixed
        onChange={handleColorChange}
      />
      <div className="mt-8 flex justify-center">
        <div
          className={`block h-16 w-16`}
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export { ColorPicker };

import { useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';

const ColorPicker = () => {
  const [color, setColor] = useState('');
  return (
    <div className="flex flex-col items-center">
      <HexColorPicker color={color} onChange={setColor} />
      <HexColorInput
        className="mt-6 w-full border-2 border-white bg-transparent p-2 focus:outline-none group-[.invalid]:border-red-500"
        color={color}
        prefixed
        onChange={setColor}
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

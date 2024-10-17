import { useState } from "react";

export default function EditableField({ value, onUpdate, prefix, suffix, className = "text-gray-300" }) {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleBlur = () => {
    setEditing(false);
    onUpdate(tempValue);
  };

  if (editing) {
    return (
      <input
        type="text"
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        onBlur={handleBlur}
        onKeyPress={(e) => e.key === "Enter" && handleBlur()}
        className="bg-gray-700 rounded px-2 py-1 w-full"
        autoFocus
      />
    );
  }

  return (
    <div onClick={() => setEditing(true)} className={`cursor-pointer hover:text-white ${className}`}>
      {prefix}
      {value}
      {suffix}
    </div>
  );
}

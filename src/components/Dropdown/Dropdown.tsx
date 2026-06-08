import { useState } from "react";
import DropdownItem from "./DropdownItem";

interface DropdownProps {
  selected: string;
  options: string[];
  onAdsLevel: (string: string) => void;
}
function Dropdown({ selected, options, onAdsLevel }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border px-4 py-2 bg-background "
      >
        {selected}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          {" "}
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute mt-2 w-48 rounded-xl bg-background border overflow-hidden">
          {options.map((option) => (
            <DropdownItem
              option={option}
              onAdsLevel={onAdsLevel}
              onOpen={onOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;

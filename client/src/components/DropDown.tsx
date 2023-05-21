import React, { useState } from "react";
import { motion } from "framer-motion";
import HipchatChevronDownIcon from "../assets/HipchatChevronDownIcon";

type Option = {
  value: string; // Removed the 'label' property
};

type DropDownProps = {
  options: Option[];
  onChange: (value: string) => void;
  headingLabel: string;
};

const DropDown = ({ options, onChange, headingLabel }: DropDownProps) => {
  const [selected, setSelected] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <span>
          <button
            type="button"
            className=" inline-flex justify-between items-center gap-3 px-3 py-1.5 w-full  border border-pot-black border-t-0 border-l-0 border-r-0   hover:border-t-0 hover:border-l-0 hover:border-r-0  outline-none"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex">
              {selected ? (
                <span className="ml-2">{selected.value}</span>
              ) : (
                <span className="ml-2 text-[#A2A2A2]">{headingLabel}</span>
              )}
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              className="w-fit h-fit flex items-center justify-center"
            >
              <HipchatChevronDownIcon color="black" />
            </motion.div>
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute z-40 right-0 mt-2 w-full  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none h-[30svh] overflow-hidden overflow-y-auto">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option.value}
                className={`${
                  selected?.value === option.value
                    ? "bg-green-200 text-black"
                    : "text-black"
                } block w-full text-left px-4 py-2 text-lg hover:bg-green-200`}
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                {option.value} {/* Display option value */}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;

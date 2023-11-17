import React, { useState } from 'react';
import "../componentsCSS/dropDown.css"



const HoverDropdown = ({ options ,title}) => {
  const [isOpen, setIsOpen] = useState(false);


  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="hover-dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dropdown-trigger">{title}</div>
      {isOpen && (
        <div className="dropdown-content">
          {options?.map((option, index) => (
            <div key={index} className="dropdown-option">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HoverDropdown;

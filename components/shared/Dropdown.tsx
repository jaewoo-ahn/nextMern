import React from "react";

type DropdownProps = {
  value?: string;
  onChangeHandler: () => void;
};

const Dropdown = ({ onChangeHandler, value }: DropdownProps) => {
  return <div>Dropdown</div>;
};

export default Dropdown;

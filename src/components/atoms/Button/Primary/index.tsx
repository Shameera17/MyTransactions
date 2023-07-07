import React from "react";

import { Button } from "antd";

interface PrimaryButtonProps {
  onClick: () => void;
  disabled?: boolean;
  buttonName: string;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  disabled = false,
  buttonName,
  className
}) => {
  return (
    <Button
      type="primary"
      className={` bg-crayola text-white ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonName}
    </Button>
  );
};

export default PrimaryButton;

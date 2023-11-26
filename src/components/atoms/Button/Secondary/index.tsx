import React from "react";

import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

interface SecondaryButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  buttonName: string;
  className?: string;
  size?: SizeType;
  width?: string;
  height?: string;
  ghost?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  onClick,
  disabled = false,
  buttonName,
  className,
  size,
  width,
  height,
  ghost
}) => {
  return (
    <Button
      size={size}
      type="primary"
      ghost={ghost}
      className={` bg-danger text-white ${className} whitespace-pre-line `}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: width,
        height: height
      }}
    >
      <span className="break-normal">{buttonName}</span>
    </Button>
  );
};

export default SecondaryButton;

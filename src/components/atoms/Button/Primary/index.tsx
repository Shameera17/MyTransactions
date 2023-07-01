import React from "react";

import { Button } from "antd";

interface PrimaryButtonProps {
  onClick: () => void;
  disabled?: boolean;
  buttonName: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  disabled = false,
  buttonName
}) => {
  return (
    <Button type="primary" onClick={onClick} disabled={disabled}>
      {buttonName}
    </Button>
  );
};

export default PrimaryButton;

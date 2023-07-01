import React from "react";

import { Button } from "antd";

interface SecondaryButtonProps {
  onClick: () => void;
  disabled?: boolean;
  buttonName: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  onClick,
  disabled = false,
  buttonName
}) => {
  return (
    <Button className="" onClick={onClick} disabled={disabled}>
      {buttonName}
    </Button>
  );
};

export default SecondaryButton;

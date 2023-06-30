import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

interface PrimaryButtonProps {
  onClick: () => void;
  disabled?: boolean;
  buttonName: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  disabled = false,
  buttonName,
}) => {
  const { t } = useTranslation();
  return (
    <Button type="primary" onClick={onClick} disabled={disabled}>
      {buttonName}
    </Button>
  );
};

export default PrimaryButton;

import React from "react";

import { Typography } from "antd";

interface DescriptionProps {
  description: string;
  className?: string;
  level?: number;
}
export const Description: React.FC<DescriptionProps> = ({
  description,
  className,
  level
}) => {
  const { Paragraph } = Typography;

  return (
    <Paragraph
      className={`text-night ${className}`}
      style={{
        fontSize: level === 1 ? "17px" : "12px",
        fontWeight: 400,
        lineHeight: level === 1 ? "16px" : " 11.72px",
        letterSpacing: "0.4000000059604645px",
        textAlign: "center",
        fontStyle: "normal"
      }}
    >
      {description}
    </Paragraph>
  );
};
export const CardDescription: React.FC<DescriptionProps> = ({
  description,
  className,
  level
}) => {
  const { Paragraph } = Typography;

  return (
    <Paragraph
      className={`text-night ${className}`}
      style={{
        textAlign: "right",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: "normal",
        letterSpacing: "0.4px",
        alignSelf: "stretch"
      }}
    >
      {description}
    </Paragraph>
  );
};

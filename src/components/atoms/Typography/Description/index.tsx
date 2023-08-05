import React from "react";

import { Typography } from "antd";

interface DescriptionProps {
  description: string;
  className?: string;
  level?: number;
}
const Description: React.FC<DescriptionProps> = ({
  description,
  className,
  level
}) => {
  const { Paragraph, Link } = Typography;

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
export default Description;

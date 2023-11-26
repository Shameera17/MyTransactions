import React from "react";

import { Typography } from "antd";

interface SubHeadingProps {
  subHeading: string;
  className?: string;
  level?: number;
}
const SubHeading: React.FC<SubHeadingProps> = ({
  subHeading,
  className,
  level
}) => {
  const { Paragraph } = Typography;

  return (
    <Paragraph
      className={`text-night ${className}`}
      style={{
        fontSize: "13px",
        fontWeight: 500,
        // lineHeight: "19px",
        // letterSpacing: "0px",
        textAlign: "left"
      }}
    >
      {subHeading}
    </Paragraph>
  );
};
export default SubHeading;

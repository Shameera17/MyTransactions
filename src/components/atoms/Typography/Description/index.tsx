import React from "react";

import { Typography } from "antd";

interface DescriptionProps {
  description: string;
}
const Description: React.FC<DescriptionProps> = ({ description }) => {
  const { Paragraph } = Typography;

  return (
    <Paragraph
      className=" text-night"
      style={{
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "16px",
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

import React from "react";

import { Typography } from "antd";

interface TitleProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
  const { Title } = Typography;

  return (
    <Title
      level={1}
      style={{
        fontWeight: 600,
        color: "#157AFE",
        fontSize: "40px",
        lineHeight: "46.88px"
      }}
    >
      {title}
    </Title>
  );
};
export default Title;

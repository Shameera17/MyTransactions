import React from "react";

import { Typography } from "antd";

import "./style.css";

interface TitleProps {
  title: string;
  className?: string;
}
export const Title: React.FC<TitleProps> = ({ title }) => {
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
export const TitleMain: React.FC<TitleProps> = ({ title, className }) => {
  const { Paragraph } = Typography;

  return (
    <Paragraph
      className={className}
      style={{
        textAlign: "right",
        fontSize: "2.5rem",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
        textTransform: "capitalize",
        alignSelf: "stretch",
        margin: 0
      }}
    >
      {title}
    </Paragraph>
  );
};
export const TitleCard: React.FC<TitleProps> = ({ title, className }) => {
  const { Title } = Typography;

  return (
    <Title
      className={"title"}
      level={1}
      style={{
        marginTop: "0px",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        textTransform: "capitalize",
        alignSelf: "stretch"
      }}
    >
      {title}
    </Title>
  );
};

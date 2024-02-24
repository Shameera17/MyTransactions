import { Typography } from "antd";

interface SubHeadingProps {
  subHeading: string;
  className?: string;
  level?: number;
}
const SubHeading = ({ subHeading, className }: SubHeadingProps) => {
  const { Paragraph } = Typography;

  return (
    <Paragraph
      className={`text-night ${className}`}
      style={{
        fontSize: "13px",
        fontWeight: 500,
        textAlign: "left"
      }}
    >
      {subHeading}
    </Paragraph>
  );
};
export default SubHeading;

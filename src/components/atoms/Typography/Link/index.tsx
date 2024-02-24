import { Typography } from "antd";

interface LinkSentenceProps {
  description: string;
  className?: string;
  level?: number;
  onClick?: () => void;
}
const LinkSentence = ({
  description,
  className,
  level,
  onClick
}: LinkSentenceProps) => {
  const { Link } = Typography;

  return (
    <Link
      onClick={onClick}
      className={` ${className}`}
      style={{
        fontSize: level === 1 ? "14px" : "12px",
        fontWeight: 400,
        lineHeight: level === 1 ? "16.41px" : "11.72px",
        letterSpacing: "0.4000000059604645px",
        textAlign: "center",
        fontStyle: "normal"
      }}
    >
      {description}
    </Link>
  );
};
export default LinkSentence;

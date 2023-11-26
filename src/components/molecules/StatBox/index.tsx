import { FC } from "react";

import { CardDescription } from "components/atoms";
import { TitleCard, TitleMain } from "components/atoms/Typography/Title";

interface StatBoxProps {
  type: "income" | "expense" | "bal" | "carried";
  title: string;
  amount: number;
  count?: number;
  status?: string | undefined;
}
const StatBox: FC<StatBoxProps> = ({ title, type, amount, count, status }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "16.6875rem",
        padding: "0.2rem 1rem",
        flexDirection: "column",
        alignItems: " flex-start",
        // gap: "0.25rem",
        // height: "110px",
        borderRadius: "8px",
        border: "1px solid var(--Grey, #D9D9D9)"
      }}
    >
      <TitleCard title={title} />
      <TitleMain
        title={`${amount}`}
        className={`${
          type === "income"
            ? "text-success"
            : type === "expense"
            ? "text-danger"
            : type === "bal"
            ? " text-crayola"
            : type === "carried"
            ? "text-idle"
            : ""
        }`}
      />
      <CardDescription
        description={status ? `${status}` : `${count} records`}
      />
    </div>
  );
};

export default StatBox;

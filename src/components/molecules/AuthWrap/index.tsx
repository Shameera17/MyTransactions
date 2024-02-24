import React from "react";

interface AuthWrapProps {
  width?: string;
  children: React.ReactNode;
}

const AuthWrap = ({ children, width }: AuthWrapProps) => {
  return (
    <div className="flex justify-center align-middle">
      <div
        className="flex flex-col justify-center "
        style={{
          marginBottom: "48px",
          width: width
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default AuthWrap;

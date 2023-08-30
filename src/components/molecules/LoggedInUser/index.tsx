import { Avatar } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "store";

const LoggedInUser = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  return (
    <div
      style={{
        display: "flex",
        padding: "1rem 0rem",
        alignItems: "center",
        gap: "0.5rem",
        alignSelf: "stretch"
      }}
    >
      <Avatar
        size={"large"}
        style={{
          backgroundColor: "#fde3cf",
          color: "#f56a00"
        }}
      >
        {`User`}
      </Avatar>
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <p
          className={`text-night `}
          style={{
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "19px",
            letterSpacing: "0px",
            textAlign: "left"
          }}
        >{`${userInfo?.firstName || ""} ${
          (userInfo && userInfo?.lastName) || ""
        }`}</p>
        <p
          style={{
            color: "#D9D9D9",
            fontSize: "0.625rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            letterSpacing: "0.025rem"
          }}
        >{`${userInfo?.email || ""}`}</p>
      </div>
    </div>
  );
};

export default LoggedInUser;

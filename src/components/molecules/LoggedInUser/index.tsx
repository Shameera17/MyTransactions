import { Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { signout } from "store/reducers/auth.reducer";

import { LinkSentence } from "components/atoms";

const LoggedInUser = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
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
        <LinkSentence
          onClick={() => {
            dispatch(signout());
          }}
          level={2}
          className="flex justify-start "
          description={"Sign out"}
        />
      </div>
    </div>
  );
};

export default LoggedInUser;

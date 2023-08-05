import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Description, PrimaryButton, Title } from "components/atoms";
import { LayoutImageCard } from "components/molecules";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2">
      <LayoutImageCard screen="Home" />
      <div className="flex flex-col justify-center">
        <div
          style={{
            marginBottom: "48px"
          }}
        >
          <Title title={t("welcome")} />
          <Description level={1} description={t("description")} />
        </div>
        <div className="flex justify-evenly">
          <div>
            <Description
              level={1}
              description={t("signup.have-account", { ns: "glossary" })}
            />
            <PrimaryButton
              width="100%"
              className=" mt-6 "
              height="40px"
              size="middle"
              onClick={() => {
                navigate("/signin");
              }}
              buttonName={t("button.signin")}
            />
          </div>
          <div>
            <Description
              level={1}
              description={t("signin.no-account", { ns: "glossary" })}
            />
            <PrimaryButton
              width="100%"
              className=" mt-6 "
              height="40px"
              size="middle"
              onClick={() => {
                navigate("/signup");
              }}
              buttonName={t("button.signup")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

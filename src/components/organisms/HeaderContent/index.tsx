import { DatePicker, Typography } from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "store";
import { setFilterCriteria } from "store/reducers/transaction.reducer";

import { PrimaryButton } from "components/atoms";
import { SelectLanguage } from "components/molecules";

const HeaderContent = () => {
  const location = useLocation();
  const path = location.pathname.replace("/app/", "");
  const filterCriteria = useSelector(
    (state: RootState) => state.transaction.filterCriteria
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const defaultDate = dayjs(`${filterCriteria.year}-${filterCriteria.month}`);
  return (
    <div className="flex justify-between align-middle ">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5
        }}
      >
        <Typography
          style={{
            fontWeight: 600,
            fontSize: "32px"
          }}
          className=" text-crayola   "
        >
          {path === "dashboard"
            ? t("dashboard.title", { ns: "glossary" })
            : path === "settings"
            ? t("settings.title", { ns: "glossary" })
            : ""}
        </Typography>
        <SelectLanguage />
      </div>

      {path === "dashboard" ? (
        <div>
          <DatePicker
            defaultValue={defaultDate}
            picker="month"
            format={"MMM YYYY"}
            onChange={(date, dateString) => {
              if (date) {
                const selectedDate = dayjs(dateString, { locale: "en" });
                dispatch(
                  setFilterCriteria({
                    month: Number(selectedDate.format("MM")),
                    year: Number(selectedDate.format("YYYY"))
                  })
                );
              }
            }}
          />
          <PrimaryButton
            onClick={function (): void {}}
            buttonName={t("button.add-new")}
          />
        </div>
      ) : path === "settings" ? (
        <div>
          {/* <PrimaryButton
            onClick={function (): void {}}
            buttonName={t("settings.save-changes", { ns: "glossary" })}
          /> */}
        </div>
      ) : undefined}
    </div>
  );
};
export default HeaderContent;

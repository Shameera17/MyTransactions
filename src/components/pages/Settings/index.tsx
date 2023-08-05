import { Description, SecondaryButton } from "components/atoms";
import { GeneralForm, SecurityForm } from "components/molecules";

const Settings = () => {
  return (
    <div className="grid  w-1/2 gap-y-10 my-5 ">
      <div>
        <GeneralForm onSubmit={() => {}} />
      </div>
      <div>
        <SecurityForm onSubmit={() => {}} />
      </div>
      <div
        className=" p-4"
        style={{
          borderRadius: "8px",
          border: "2px dashed #EF5350",
          height: "72px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Description
          level={1}
          className=" text-danger text-center"
          description={"Delete user account"}
        />
        <SecondaryButton className=" w-36" buttonName={"Delete"} />
      </div>
    </div>
  );
};
export default Settings;

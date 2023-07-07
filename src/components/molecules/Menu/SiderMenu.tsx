import MenuItem from "antd/es/menu/MenuItem";
import { useNavigate } from "react-router-dom";

import { MenuWrapper } from "components/atoms";

const SiderMenu = () => {
  const navigate = useNavigate();
  return (
    <MenuWrapper className=" w-full space-y-2">
      <MenuItem onClick={() => navigate("/dashboard")} key={0}>
        Dashboard
      </MenuItem>
      <MenuItem key={1} onClick={() => navigate("/settings")}>
        Settings
      </MenuItem>
    </MenuWrapper>
  );
};

export default SiderMenu;

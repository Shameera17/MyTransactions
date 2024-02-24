import { Menu, MenuTheme } from "antd";

interface WrapperProps {
  theme?: MenuTheme;
  height?: string;
  className?: string;
  children: any;
}

const Wrapper = ({ theme, height, children, className }: WrapperProps) => {
  return (
    <Menu
      className={className}
      id="Menu"
      theme={theme ?? "light"}
      style={{
        height: height,
        border: "none"
      }}
      mode={"vertical"}
      defaultSelectedKeys={["0"]}
    >
      {children}
    </Menu>
  );
};
export default Wrapper;

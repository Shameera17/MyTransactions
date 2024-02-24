import MenuItem from "antd/es/menu/MenuItem";

interface ItemProps {
  title: string;
  className: string;
  icon?: React.ReactNode;
}

const Item = ({ title, className, icon }: ItemProps) => {
  return (
    <MenuItem
      icon={icon}
      style={{
        height: "32px"
      }}
      className={` ${className}`}
    >
      {title}
    </MenuItem>
  );
};
export default Item;

import MenuItem from "antd/es/menu/MenuItem";

interface ItemProps {
  title: string;
  className: string;
  icon?: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ title, className, icon }) => {
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

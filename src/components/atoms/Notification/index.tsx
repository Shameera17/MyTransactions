import { notification } from "antd";

export const showNotification = (
  type: "success" | "info" | "warning" | "error",
  message: string,
  description?: string
) => {
  notification[type]({
    message,
    description,
    placement: "topRight",
    duration: 3
  });
};

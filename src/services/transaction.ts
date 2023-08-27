import axiosInstance from "./axiosInstance";

const authURL = `${process.env.BASE_URL}/Auth`;
export const login = ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {};
export const getdata = async () => {
  try {
    // const response = await axiosInstance.post(API_ENDPOINTS.login, credentials);
    const response = await axiosInstance.get(`Transaction/filter`, {
      params: {
        UserId: "027DE207-9741-4122-BA83-08DBA3151F0D",
        Status: 1
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

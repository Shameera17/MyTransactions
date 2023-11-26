// check whether user has logged in
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "store";

const ProtectedRoute = () => {
  const auth = useSelector((state: RootState) => state.auth);

  return auth.userInfo && auth?.token ? (
    <Outlet />
  ) : (
    <Navigate to={"/signin"} />
  );
};

export default ProtectedRoute;

import { StrictMode, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { refreshAuthToken } from "store/reducers/auth.reducer";

import "./App.css";
import "./i18n/i18n";
import Routes from "./routes";

function App() {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.userInfo && !auth.token) {
      dispatch(refreshAuthToken());
    }
  }, [auth.userInfo, auth.token]);

  return (
    <>
      <StrictMode>
        <Routes isLoggedIn={auth?.userInfo && auth?.token ? true : false} />
      </StrictMode>
    </>
  );
}

export default App;

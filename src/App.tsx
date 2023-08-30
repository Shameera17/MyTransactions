import { StrictMode, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getTransactionTypes } from "services/transactionType";
import { RootState } from "store";
import { refreshAuthToken } from "store/reducers/auth.reducer";
import { setTransactionTypes } from "store/reducers/transaction.reducer";

import AddTransactionModal from "components/molecules/AddTransactionModal";

import "./App.css";
import "./i18n/i18n";
import Routes from "./routes";

function App() {
  const auth = useSelector((state: RootState) => state.auth);
  const types = useSelector(
    (state: RootState) => state.transaction.transactionTypes
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.userInfo && !auth.token) {
      dispatch(refreshAuthToken());
    } else if (types.length < 1) {
      getTransactionTypes()
        .then(data => {
          dispatch(setTransactionTypes(data));
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  }, [auth.userInfo, auth.token]);

  return (
    <>
      <StrictMode>
        <Routes isLoggedIn={auth?.userInfo && auth?.token ? true : false} />
        <AddTransactionModal />
      </StrictMode>
    </>
  );
}

export default App;

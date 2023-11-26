import { combineReducers } from "redux";

import authReducer from "./reducers/auth.reducer";
import transactionReducer from "./reducers/transaction.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  transaction: transactionReducer
});

export default rootReducer;

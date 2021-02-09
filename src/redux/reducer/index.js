import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import userReducer from "./usersReducer";
import vehicalsReducers from "./vehicalsReducers";
import driversReducer from "./driversReducer";
import ridesReducers from "./ridesReducers";
import adminReducer from "./adminReducer";
import categoryReducer from "./categoryReducer";
import offerReducer from "./offerReducer";

export default combineReducers({
  city: cityReducer,
  admin: adminReducer,
  users: userReducer,
  offer: offerReducer,
  category: categoryReducer,
  vehicals: vehicalsReducers,
  drivers: driversReducer,
  rides: ridesReducers,
});

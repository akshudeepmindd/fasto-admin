import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import userReducer from "./usersReducer";
import vehicalsReducers from "./vehicalsReducers";
import driversReducer from "./driversReducer";
import ridesReducers from "./ridesReducers";

export default combineReducers({
  city: cityReducer,
  users: userReducer,
  vehicals: vehicalsReducers,
  drivers: driversReducer,
  rides: ridesReducers,
});

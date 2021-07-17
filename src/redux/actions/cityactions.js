import * as cityApis from "../../services/city";
import * as cityActionTypes from "../actionsType/cityActionType";

export const createCity = (params) => async (dispatch) => {
  const resp = await cityApis.newCity(params);
  dispatch({
    type: cityActionTypes.CREATE_CITY,
    payload: resp.data,
  });
  return resp.data;
};

export const updateCity = (params) => async (dispatch) => {
  const resp = await cityApis.updateCity(params);
  dispatch({
    type: cityActionTypes.UPDATE_CITY,
    payload: resp.data,
  });
  return resp.data;
};

export const deleteCity = (params) => async (dispatch) => {
  const resp = await cityApis.deleteCity(params);

  dispatch({
    type: cityActionTypes.DELETE_CITY,
    payload: resp.data,
  });
  return resp.data;
};

export const getAllCities = () => async (dispatch) => {
  const resp = await cityApis.getCities();
  dispatch({
    type: cityActionTypes.ALL_CITIES,
    payload: resp?.data?.data,
  });
};
export const fareList = () => async (dispatch) => {
  const resp = await cityApis.getPrice();

  dispatch({
    type: cityActionTypes.ALL_FARE,
    payload: resp?.data,
  });
};

export const Addfare = (params) => async (dispatch) => {
  const resp = await cityApis.addfare(params);
  console.log(resp);
  dispatch({
    type: cityActionTypes.ADD_FARE,
  });
};

export const deleteClass = (id) => async (dispatch) => {
  const resp = await cityApis.deleteclass(id);
  console.log(resp, "delete");
  dispatch({
    type: cityActionTypes.DELETE_CLASS,
  });
};

export const Addclass = (params) => async (dispatch) => {
  const resp = await cityApis.addclass(params);
  console.log(resp);
  dispatch({
    type: cityActionTypes.ADD_CLASS,
  });
};

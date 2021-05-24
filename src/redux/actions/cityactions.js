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
  console.log(resp,"delrete");
  dispatch({
    type: cityActionTypes.DELETE_CITY,
    payload: resp.data,
  });
  return resp.data;
};

export const getAllCities = () => async (dispatch) => {
  const resp = await cityApis.getCities();
  console.log(resp,"get");
  dispatch({
    type: cityActionTypes.ALL_CITIES,
    payload: resp?.data?.data,
  });
};

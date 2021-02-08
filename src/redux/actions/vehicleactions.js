import * as vehicleApis from "../../services/vehichle";
import * as vehicleActionTypes from "../actionsType/vehicleActionType";

export const createVehicle = (params) => async (dispatch) => {
  const resp = await vehicleApis.newVehicle(params);
  dispatch({
    type: vehicleActionTypes.CREATE_VEHICLE,
    payload: resp.data,
  });
  return resp.data;
};

export const updateVehicle = (params) => async (dispatch) => {
  const resp = await vehicleApis.updateVehicle(params);
  dispatch({
    type: vehicleActionTypes.UPDATE_VEHICLE,
    payload: resp.data,
  });
  return resp.data;
};

export const deleteVehicle = (params) => async (dispatch) => {
  const resp = await vehicleApis.deleteVehicle(params);
  dispatch({
    type: vehicleActionTypes.DELETE_VEHICLE,
    payload: resp.data,
  });
  return resp.data;
};

export const getAllVehicles = () => async (dispatch) => {
  const resp = await vehicleApis.getVehicles();
  dispatch({
    type: vehicleActionTypes.ALL_VEHICLES,
    payload: resp?.data?.data,
  });
};

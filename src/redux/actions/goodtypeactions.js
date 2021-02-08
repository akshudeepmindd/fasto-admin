import * as goodtypeApis from "../../services/goodtype";
import * as goodtypeActionTypes from "../actionsType/goodtypeActionType";

export const creategoodtype = (params) => async (dispatch) => {
  const resp = await goodtypeApis.newgoodtype(params);
  dispatch({
    type: goodtypeActionTypes.CREATE_GOODTYPE,
    payload: resp.data,
  });
  return resp.data;
};

export const updategoodtype = (params) => async (dispatch) => {
  const resp = await goodtypeApis.updategoodtype(params);
  dispatch({
    type: goodtypeActionTypes.UPDATE_GOODTYPE,
    payload: resp.data,
  });
  return resp.data;
};

export const deletegoodtype = (params) => async (dispatch) => {
  const resp = await goodtypeApis.deletegoodtype(params);
  dispatch({
    type: goodtypeActionTypes.DELETE_GOODTYPE,
    payload: resp.data,
  });
  return resp.data;
};

export const getAllgoodtypes = () => async (dispatch) => {
  const resp = await goodtypeApis.getgoodtype();
  dispatch({
    type: goodtypeActionTypes.ALL_GOODTYPES,
    payload: resp?.data?.data,
  });
};

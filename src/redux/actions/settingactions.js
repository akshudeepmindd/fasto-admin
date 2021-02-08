import * as settingApis from "../../services/setting";
import * as settingActionTypes from "../actionsType/settingActionType";

export const createSetting = (params) => async (dispatch) => {
  const resp = await settingApis.newSetting(params);
  dispatch({
    type: settingActionTypes.CREATE_SETTING,
    payload: resp.data,
  });
  return resp.data;
};

export const updateSetting = (params) => async (dispatch) => {
  const resp = await settingApis.updateSetting(params);
  dispatch({
    type: settingActionTypes.UPDATE_SETTING,
    payload: resp.data,
  });
  return resp.data;
};

export const deleteSetting = (params) => async (dispatch) => {
  const resp = await settingApis.deleteSetting(params);
  dispatch({
    type: settingActionTypes.DELETE_SETTING,
    payload: resp.data,
  });
  return resp.data;
};

export const getAllSettings = () => async (dispatch) => {
  const resp = await settiApis.getSettings();
  dispatch({
    type: settingActionTypes.ALL_SETTINGS,
    payload: resp?.data?.data,
  });
};

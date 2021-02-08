import * as offerApis from "../../services/offer";
import * as offerActionTypes from "../actionsType/offerActionType";

export const createOffer = (params) => async (dispatch) => {
  const resp = await offerApis.newOffer(params);
  dispatch({
    type: offerActionTypes.CREATE_OFFER,
    payload: resp.data,
  });
  return resp.data;
};

export const updateOffer = (params) => async (dispatch) => {
  const resp = await offerApis.updateOffer(params);
  dispatch({
    type: offerActionTypes.UPDATE_OFFER,
    payload: resp.data,
  });
  return resp.data;
};

export const deleteOffer = (params) => async (dispatch) => {
  const resp = await offerApis.deleteOffer(params);
  dispatch({
    type: offerActionTypes.DELETE_OFFER,
    payload: resp.data,
  });
  return resp.data;
};

export const getAllOffer = () => async (dispatch) => {
  const resp = await offerApis.getOffer();
  dispatch({
    type: offerActionTypes.ALL_OFFER,
    payload: resp?.data?.data,
  });
};

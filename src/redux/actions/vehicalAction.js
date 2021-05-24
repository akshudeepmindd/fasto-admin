import * as vehicalsApis from '../../services/vehical'
import * as vehicalsActionTypes from '../actionsType/vehicalActionType'

export const vehicalList = () => async (dispatch) => {
  const response = await vehicalsApis.vehicallist()
  console.log(response,"vaction");
  dispatch({
    type: vehicalsActionTypes.GET_VEHICALS,
    payload: response?.data?.data,
  })
}

export const addVehical = (params) => async (dispatch) => {
  console.log(params, 'oparpaprp')
  const resp = await vehicalsApis.newVehical(params)
  dispatch({
    type: vehicalsActionTypes.ADD_VEHICALS,
    payload: resp.data,
  })
  return resp.data
}

export const updateSingleVehiclel = (_id, params) => async (dispatch) => {
  const resp = await vehicalsApis.udpateVehicle(_id, params)
  console.log(resp, 'resss')
  dispatch({
    type: vehicalsActionTypes.GET_SINGLE_VEHICLE,
  })
  return resp?.data
}

export const deleteVehicle = (_id) => async (dispatch) => {
  const resp = await vehicalsApis.deleteVehicle(_id)
  dispatch({
    type: vehicalsActionTypes.DELETE_VEHICLE,
    payload: _id,
  })
}

import * as ridesApis from "../../services/rides";
import * as ridesActionType from "../actionsType/ridesActionType";

export const rideList = () => async (dispatch) => {
  const response = await ridesApis.rides();
  console.log(response,"rideAction");
  dispatch({
    type: ridesActionType.GET_RIDES,
    payload: response?.data?.data,
  });
};
export const createRide=(params,token)=>async(dispatch)=>{
  const res=await ridesApis.createRide(params,token);
  console.log(res);
  dispatch({
    type:ridesActionType.CREATE_RIDES,
    payload:res?.data?.data,
  });
  return(res.data);
};
export const updateRide=(params)=>async(dispatch)=>{
  const res=await ridesApis.updateRide(params);
  dispatch({
    type:ridesActionType.UPDATE_DRIVER,
    payload:res?.data?.data,
  });
  return (res.data);
};
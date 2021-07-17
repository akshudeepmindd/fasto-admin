import * as ticketApis from "../../services/ticket";
import * as ticketActionType from "../actionsType/ticketActionType";
export const ticketList = () => async (dispatch) => {
    const response = await ticketApis.getAllticket();
    console.log(response.data);
    dispatch({
      type: ticketActionType.GET_ALLTICKET,
      payload: response?.data?.data,
    });
    return response.data;
  };
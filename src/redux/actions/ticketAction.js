import * as ticketApis from '../../services/ticket'
import * as ticketActionType from '../actionsType/ticketActionType'
export const ticketList = () => async dispatch => {
  const response = await ticketApis.getAllticket()
  console.log(response)
  dispatch({
    type: ticketActionType.GET_ALLTICKET,
    payload: response?.data?.message
  })
  return response.data
}

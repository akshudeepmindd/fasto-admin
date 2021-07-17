 import * as ticketActionType from "../actionsType/ticketActionType";
export default(state = {},action)=>{
    switch(action.type){
        case ticketActionType.GET_ALLTICKET:
        return{
            ...state,
            allticket:action.payload,
        }
        default:
      return state;
  
    }
}
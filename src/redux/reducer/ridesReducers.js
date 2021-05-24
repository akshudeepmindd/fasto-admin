import * as ridesActionType from "../actionsType/ridesActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case ridesActionType.GET_RIDES:
      return {
        ...state,
        ridelist: action.payload,
      };
    case ridesActionType.GET_USER_RIDES:
      return {
        ...state,
        userridelist: action.payload,
      };
    case ridesActionType.GET_USER_RIDE:
      return {
        ...state,
        userride: action.payload,
      };
      case ridesActionType.CREATE_RIDES:
        return{
          ...state,
          cride:action.payload,
        }
        case ridesActionType.UPDATE_DRIVER:
          return{
            ...state,
            updatedriver:action.payload,
          }
    default:
      return state;
  }
};

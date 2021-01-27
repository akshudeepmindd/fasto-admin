import * as cityActionType from "../actionsType/cityActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case cityActionType.CREATE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case cityActionType.ALL_CITIES:
      return {
        ...state,
        allcities: action.payload,
      };
    default:
      return state;
  }
};

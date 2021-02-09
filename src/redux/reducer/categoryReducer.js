import * as categoryActionType from "../actionsType/categoryActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case categoryActionType.CREATE_GOODTYPE:
      return {
        ...state,
        goodtype: action.payload,
      };
    case categoryActionType.ALL_GOODTYPES:
      return {
        ...state,
        allgoods: action.payload,
      };
    case categoryActionType.UPDATE_GOODTYPE:
      return {
        ...state,
        adminList: action.payload,
      };
    case categoryActionType.DELETE_GOODTYPE:
      const filterproduct = state.allgoods.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        allgoods: filterproduct,
      };
    default:
      return state;
  }
};

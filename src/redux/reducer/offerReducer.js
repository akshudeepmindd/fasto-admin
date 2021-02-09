import * as offerActionType from "../actionsType/offerActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case offerActionType.CREATE_OFFER:
      return {
        ...state,
        offer: action.payload,
      };
    case offerActionType.ALL_OFFER:
      return {
        ...state,
        alloffers: action.payload,
      };
    case offerActionType.UPDATE_OFFER:
      return {
        ...state,
        offer: action.payload,
      };
    case offerActionType.DELETE_OFFER:
      const filterproduct = state.alloffers.filter(
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

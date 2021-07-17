import * as adminActionType from "../actionsType/adminActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case adminActionType.CREATE_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };
    case adminActionType.LOGIN_ADMIN:
      return {
        ...state,
        user: action.payload,
      };
    case adminActionType.GET_ADMINS:
      return {
        ...state,
        adminList: action.payload,
      };
      case adminActionType.UPDATE_ADMIN:
        return {
          ...state,
          update:action.payload,
        };
    case adminActionType.DELETE_ADMIN:
      const filterproduct = state.adminList.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        adminList: filterproduct,
      };
    default:
      return state;
  }
};

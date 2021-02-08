import * as vehicalActionType from '../actionsType/vehicalActionType'

export default (state = {}, action) => {
  switch (action.type) {
    case vehicalActionType.GET_VEHICALS:
      return {
        ...state,
        vehicalslist: action.payload,
      }
    case vehicalActionType.ADD_VEHICALS:
      return {
        ...state,
        vehical: action.payload,
      }
    case vehicalActionType.GET_SINGLE_VEHICLE:
      return {
        ...state,
        singleVehicle: action.payload,
      }
    case vehicalActionType.DELETE_VEHICLE:
      const filterproduct = state.vehicalslist.filter(
        (item) => item._id !== action.payload
      )
      return {
        ...state,
        vehicalslist: filterproduct,
      }
    default:
      return state
  }
}

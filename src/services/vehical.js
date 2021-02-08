import { client } from './index'

export const newVehical = (params) => client.post('vehical/newvehical', params)
// export const updateCity = (params) => client.patch("city/updatecity", params);
// export const deleteCity = (_id) => client.post(`city/deletecity/${_id}`);
export const vehicallist = () => client.get('vehical/')
export const udpateVehicle = (_id, params) =>
  client.patch(`vehical/updatevehical/${_id}`, params)

export const deleteVehicle = (_id) =>
  client.delete(`vehical/deleteVehical/${_id}`)

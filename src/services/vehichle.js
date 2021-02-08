import { client } from "./index";
export const newVehicle = (params) => client.post("vehical/newvehical", params);
export const updateVehicle = (id, params) =>
  client.patch(`vehical/updatevehical/${id}`, params);
export const deleteVehicle = (id) => client.post(`vehical/deleteVehicle/${id}`);
export const getVehicles = () => client.get("vehical/");

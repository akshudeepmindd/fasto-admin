import { client } from "./index";
export const newSetting = (params) => client.post("vehical/newSetting", params);
export const updateSetting = (id, params) =>
  client.patch(`vehical/updateSetting/${id}`, params);
export const deleteSetting = (id) => client.post(`vehical/deleteSetting/${id}`);
export const getSettings = () => client.get("setting/");
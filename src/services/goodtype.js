import { client } from "./index";
export const newgoodtype = (params) =>
  client.post("category/newgoodtype", params);
export const updategoodtype = (id, params) =>
  client.patch(`category/updategoodtype/${id}`, params);
export const deletegoodtype = (id) =>
  client.delete(`category/deletegoodtype/${id}`);
export const getgoodtype = () => client.get("category/");

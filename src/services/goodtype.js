import { client } from "./index";
export const newgoodtype = (params) =>
  client.post("goodtype/newgoodtype", params);
export const updategoodtype = (id, params) =>
  client.patch(`goodtype/updategoodtype/${id}`, params);
export const deletegoodtype = (id) =>
  client.post(`goodtype/deletegoodtype/${id}`);
export const getgoodtype = () => client.get("goodtype/");

import { client } from "./index";

export const newCity = (params) => client.post("city/newcity", params);
export const updateCity = (params) => client.patch("city/updatecity", params);
export const deleteCity = (_id) => client.delete(`city/deletecity/${_id}`);
export const getCities = () => client.get("city/allcities");
export const getPrice = () => client.get("basefare/allfare");
export const addfare = (params) => client.post("basefare/addclassfare", params);
export const deleteclass = (id) => client.delete(`basefare/deletefare/${id}`);
export const addclass = (params) => client.post("basefare/addclass", params);

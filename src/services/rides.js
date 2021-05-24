import { client } from "./index";

// export const newCity = (params) => client.post("city/newcity", params);
// export const updateCity = (params) => client.patch("city/updatecity", params);
// export const deleteCity = (_id) => client.post(`city/deletecity/${_id}`);
export const rides = () => client.post("rides/");
export const userRides = () => client.get("rides/userrides");
export const userRide = () => client.get("rides/userride");
export const createRide=(params,token)=>client.post(`rides/createride`,params,{headers:{Authorization:token}});
export const updateRide=(params)=>client.patch('rides/updateDriver',params);
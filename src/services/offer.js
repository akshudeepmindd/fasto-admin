import { client } from "./index";
export const newOffer = (params) => client.post("Offer/newOffer", params);
export const updateOffer = (id, params) =>
  client.patch(`Offer/updateOffer/${id}`, params);
export const deleteOffer = (id) => client.delete(`Offer/deleteOffer/${id}`);
export const getOffer = () => client.get("offer/");

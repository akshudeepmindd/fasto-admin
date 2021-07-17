import { client } from "./index";
export const getAllticket=()=>client.get(`ticket/getAllTicket`);
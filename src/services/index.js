import axios from "axios";
export const client = axios.create({
  //   baseURL: "https://tmaker-backend.herokuapp.com/api",
  baseURL: "http://localhost:5003/",
});

client.interceptors.response.use(
  (response) => response,
  (error) => console.log(error)
  // const { response } = error;
  // console.log(error, "<<< error in interceptors");
  // if (response.responseCode === 401) {
  //   return response;
  // } else if (response.responseCode === 400) {
  //   return response;
  // } else if (response.responseCode === 422) {
  //   return response;
  // } else {
  //   return response;
  // }
  // return Promise.reject(error.response);
);

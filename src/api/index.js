import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://dummyjson.com",
});
console.log(mainUrl);

export default mainUrl;

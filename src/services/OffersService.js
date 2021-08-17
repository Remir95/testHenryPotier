import axios from "axios";

const apiOffers = axios.create({
  baseURL:
    "https://henri-potier.techx.fr/books/c8fabf68-8374-48fe-a7ea-a00ccd07afff,a460afed-e5e7-4e39-a39d-c885c05db861/commercialOffers",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default {
  getOffers() {
    return apiOffers.get("/");
  },
};

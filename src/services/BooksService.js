import axios from "axios";

const apiBooks = axios.create({
  baseURL: "https://henri-potier.techx.fr/books",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default {
  getBooks() {
    return apiBooks.get("/");
  },
};

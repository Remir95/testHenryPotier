<template>
  <div>
    <div>
      <h1>List of books</h1>
      <masonry
        :cols="{ default: 4, 1000: 3, 700: 2, 400: 1 }"
        :gutter="{ default: '1%', 700: '2%' }"
      >
        <books-details
          v-for="book in books"
          :key="book.isbn"
          :book="book"
          :offers="offers"
          class="positionCard"
        />
      </masonry>
    </div>
  </div>
</template>

<script>
import BooksService from "../services/BooksService";
import BooksDetails from "./BooksDetails.vue";
import BooksOffers from "../services/OffersService";

export default {
  components: { BooksDetails },
  data() {
    return {
      books: [],
      search: "",
      offers: [],
    };
  },
  created() {
    BooksService.getBooks()
      .then((response) => {
        this.books = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log("there was an error with books:" + error.response);
      });
    BooksOffers.getOffers()
      .then((response) => {
        this.offers = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log("there was an error with offers:" + error.response);
      });
  },
};
</script>

<style scoped>
.positionCard {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>

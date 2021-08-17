<template>
  <div class="blockBooks">
    <p class="redBanner">Actuellement 5% une reduction</p>
    <b-card
      :title="book.title"
      :img-src="book.cover"
      :key="book.isbn"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <div>
        <b-button v-b-modal.modal-xl @click="test">Lire le synopsis</b-button>

        <b-modal
          id="modal-xl"
          size="xl"
          :title="book.title"
          :img-src="book.cover"
          :key="book.isbn"
        >
          <div style="display: flex; justify-content: space-between">
            <b-img
              :src="book.cover"
              class="imgSize"
              thumbnail
              alt="Responsive image"
            ></b-img>
            <p style="margin-left: 20px">{{ book.synopsis }}</p>
          </div>
        </b-modal>
      </div>
      <div class="blockPrice">
        <p class="stylePrice">{{ book.price + "€" }}</p>
        <p>{{ reducing + "€" }}</p>
        <b-button variant="primary" @click="addToCart()"
          >Ajouter au panier</b-button
        >
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
    },
    offer: {
      type: Array,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    test() {
      this.book.isbn;
      console.log("test", this.book.isbn);
    },
  },
  computed: {
    reducing() {
      return this.book.price - this.pourcent;
    },
  },
};
</script>

<style scoped>
.modalSize {
  max-width: 500px;
}
.imgSize {
  max-width: 200px;
  max-height: 300px;
}
.blockBooks {
  display: flex;
  flex-direction: column;
}
.stylePrice {
  text-decoration: Line-through;
}
.redBanner {
  background-color: rgb(234, 60, 60);
  color: white;
  margin: 0px;
  padding: 15px;
  max-width: 300px;
  border-radius: 10px 10px 0px 0px;
}
.blockPrice {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
</style>

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 }
    ],
    pets: [{ name: "pudgee", breed: "pug" }]
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map(product => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2
        };
      });
      return saleProducts;
    },
    myPets: state => {
      var myPetsArray = state.pets.map(pet => {
        return {
          name: pet.name,
          breed: pet.breed
        };
      });
      return myPetsArray;
    }
  },
  mutations: {
    reducePriceMutation: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function() {
        // call the mutation by using context.commit
        context.commit("reducePriceMutation", payload);
      }, 0);
    }
  }
});

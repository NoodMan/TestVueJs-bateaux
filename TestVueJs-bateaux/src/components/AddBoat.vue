<template>
  <div>
  
    <br />
      <form @submit.prevent="addBoat">
       <div class="d-flex flex-column align-items-center">
        <div>
          <label for="name">Name</label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="boat name"
            v-model="boat.name"
          />
        </div>
        <br />
        <div class="input-group">
          <label for="taille"> Taille</label>

          <input
            type="number"
            name="taille"
            id="taille"
            placeholder="taille boat en m"
            min="40"
            max="5000"
            v-model="boat.taille"
          />
        </div>
        <br>
          <div class="input-group">
          <label for="owner"> Owner</label>

          <input
            type="string"
            name="owner"
            id="owner"
            placeholder="Owner boat"
           
            v-model="boat.owner"
          />
        </div>
        <br>
           <div class="input-group">
          <label for="price"> Price</label>

          <input
            type="number"
            name="price"
            id="price"
            placeholder="boat price"
            min="500"
            v-model="boat.price"
          />
        </div>
        <br />
        <br />
        <center>
         
          <input type="submit" value="Record boat" />
        </center>
        <br />
    </div>
      </form>

    
   

  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { useBoatsStore } from "../stores/storeboat";
import ListBoat from "./ListBoat.vue";

const store = useBoatsStore(); // useBoatsStore devient store
const boat = reactive({
  // reactive devient une tableau de boat
  name: "",
  taille: 0,
  owner: "",
  price: 0,
});

function addBoat() {
  // fonction pour enregistrer les boat du form dans le store
  store.boats.push(boat);
}
</script>

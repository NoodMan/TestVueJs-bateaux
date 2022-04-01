<template>
  <div>
  
    <br />
    <div class="d-flex flex-column align-items-center">
      <form @submit.prevent="addBoat">
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
            placeholder="taille baot en m"
            min="40"
            max="20000"
            v-model="boat.taille"
          />
        </div>
          <div class="input-group">
          <label for="owner"> Owner</label>

          <input
            type="string"
            name="owner"
            id="owner"
            placeholder="Owner baot"
           
            v-model="boat.owner"
          />
        </div>
           <div class="input-group">
          <label for="price"> Price</label>

          <input
            type="number"
            name="price"
            id="price"
            placeholder="boat price"
            min="0"
            v-model="boat.price"
          />
        </div>
        <br />
        <br />
        <center>
         
          <input type="submit" value="Record data" />
        </center>
        <br /><br />
      </form>
    </div>

    <ListBoat />
    
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity"
import { useBoatsStore } from "../stores/boat"
import  ListBoat from "../components/ListBoat.vue"

const store = useBoatsStore()
const boat = reactive({
    name: "",
    taille: 0, 
    owner: "",
    price: 0,
})

function addBoat() {
store.boats.push(boat) 
}

</script>

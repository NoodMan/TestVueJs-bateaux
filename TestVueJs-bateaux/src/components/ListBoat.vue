<template>
  <center>
    <br />

    <div class="card" style="">
      <form @submit.prevent="listBoat">
      <br />

      <table class="table">
        <tr>
          <th scope="col">
           Boat
          </th>
          <th scope="col">
           Owner
          </th>
          <th scope="col">
            Profitability
          </th>
        </tr>

        <tbody>
          <tr v-for="g_b in profitability" :key="g_b">>
            <td>{{ g_b.name }}</td>
            <td>{{ g_b.owner }}</td>
            <td class="table-active">{{ g_b.profitability }}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <ListBoat />
    </div>
  </center>
 
</template>

<script>
//pour pouvoir utiliser les données du store
// import { useBoatsStore } from "../stores/storeboat"
//et ne pas oublierle const
// const store = useBoatsStore();
// const g_b = getBoats();


import { mapWritableState } from "pinia";
import { useBoatsStore } from "../stores/storeboat"
import { ListBoat} from "../views/ListView.vue"

export default {
  computed: {
    ...mapWritableState(useBoatsStore, {
      profitability: "getBoats",
     
    })
},

};
  function listBoat() { // fonction pour enregistrer les boat du form dans le store
store.boats.push(boat) 


  }


</script>

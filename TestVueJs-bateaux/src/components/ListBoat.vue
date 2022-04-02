<template>
  <center>
    <br />

    <div class="card" style="">
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
            <td>{{ boat.name }}</td>
            <td>{{ boat.owner }}</td>
            <td class="table-active">{{ boat.profitability }}</td>
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

export default {
  computed: {
    ...mapWritableState(useBoatsStore, {
      profitability: "getBoats",
     
    }),
  },
};



</script>

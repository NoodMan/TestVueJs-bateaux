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
          <tr>
            <td>{{ store.name }}</td>
            <td>{{ store.owner }}</td>
            <td class="table-active">{{ store.profitability }}</td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  </center>
 
</template>

<script setup>
//pour pouvoir utiliser les données du store
import { useBoatsStore } from "../stores/storeboat"
//et ne pas oublierle const
const store = useBoatsStore();
</script>
<template>
  <table>
    <thead>
      <tr>
        <th>Boat</th>
        <th>Owner</th>
        <th>Profitability</th>
      </tr>
    </thead>
    <tbody>
      <!--on boucle sur la liste useBoatsStore sur chaque objet boat => 1 ligne par bateau-->
      <tr v-for=" m_b in money_boats" :key="m_b.id">
        <th>{{m_b.name}}</th>
        <th>{{m_b.owner}}</th>
        <th>{{m_b.profitability}}</th>
      </tr>
      
 <td>{{ }} </td>
   


    </tbody>
         <ListBoat />
  </table>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core"
import { useBoatsStore } from "../stores/storeboat"
onMounted
</script>
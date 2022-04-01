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
      <!--on boucle sur la liste Allboat sur chaque objet boat : une ligne par bateau-->
      <tr v-for="boat in getList" :key="boat">
        <th>{{boat.name}}</th>
        <th>{{boat.owner}}</th>
        <th>{{boat.profitability}}</th>
      </tr>
    </tbody>
  </table>
</template>

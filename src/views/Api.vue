<script setup>
import axios from "axios";
import { ref, computed } from "vue";
const data = ref(null);
const dataAsync = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=5");
    data.value = response; // 賦值給"data"的value屬性
  } catch (err) {
    console.log(err);
  }
};
</script>
<template>
  <button class="btn btn-warning btn-lg w-25 h-25" @click="dataAsync">get</button>
  <div v-if="data">
    <div v-for="result in data.data.results">
      <p>性別: {{ result.gender }}</p>
      <p>{{ result.name.first }} {{ result.name.last }}</p>
    </div>
    <!-- <div>{{ data.data.results[0].gender }}</div> -->
  </div>
  <div v-else>
    <div>嫩</div>
  </div>
</template>
<style scoped lang=""></style>

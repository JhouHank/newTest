<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
const { count } = storeToRefs(store);
const clickAdd = () => {
  store.increment();
};
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="btn btn-large btn-primary" @click="clickAdd">add</button>
    <h2>{{ count }}</h2>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  /* .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
}
</style>

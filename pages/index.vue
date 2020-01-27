<template>
  <div class="container">
    <game-table class="w-full"></game-table>
  </div>
</template>

<script>
import GameTable from "~/components/Table.vue";

export default {
  components: {
    GameTable
  },
  async fetch({ store }) {
    await store.dispatch("deck/initialize");
    const hands = await store.dispatch("deck/draw", 6);
    await store.dispatch("hands/setCards", hands);
  }
};
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>

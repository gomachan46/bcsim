<template>
  <div class="container">
    <card></card>
  </div>
</template>

<script>
import Card from "~/components/Card.vue";

export default {
  components: {
    Card
  }
};
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>

<template>
  <div class="container">
    <card
      :id="1"
      image="/bc_icon.jpg"
      :effects="['4ダメージを与える。']"
      type="攻撃"
      title="攻撃"
      cost="1"
    ></card>
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

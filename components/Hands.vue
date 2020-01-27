<template>
  <div class="flex flex-wrap justify-center">
    <template v-for="card in cards">
      <!-- eslint-disable-next-line vue/require-component-is -->
      <component
        :is="card.component"
        v-bind="card.props"
        class="sp:w-1/2 w-1/6"
      ></component>
    </template>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState: mapHandsState } = createNamespacedHelpers("hands");

export default {
  components: {},
  computed: {
    ...mapHandsState({
      cards: ({ cards }) => cards
    })
  }
};
</script>

<style></style>

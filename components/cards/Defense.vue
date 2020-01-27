<template>
  <card
    :cost="`${cost}`"
    :text="text"
    :effect="effect"
    image="/bc_icon.jpg"
    type="防御"
    title="防御"
  ></card>
</template>

<script>
import Card from "~/components/Card.vue";

export default {
  components: {
    Card
  },
  inheritAttrs: false,
  props: {
    cost: {
      type: Number,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    text() {
      return `${this.value}ブロックを得る。`;
    },
    effect() {
      return () => {
        console.log(`hello, defense: ${this.value} ${this.cost}`);
      };
    }
  }
};
</script>

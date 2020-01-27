<template>
  <card
    :cost="`${cost}`"
    :text="text"
    :effect="effect"
    image="/bc_icon.jpg"
    type="攻撃"
    title="攻撃"
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
    damage: {
      type: Number,
      required: true
    }
  },
  computed: {
    text() {
      return `${this.damage}ダメージを与える。`;
    },
    effect() {
      return () => {
        console.log(`hello, attack: ${this.damage} ${this.cost}`);
      };
    }
  }
};
</script>

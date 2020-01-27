<template>
  <card
    :cost="`${cost}`"
    :text="text"
    :effect="effect"
    image="/bc_icon.jpg"
    type="スキル"
    title="回復"
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
      return `捨て札の${this.value}枚のランダムなカードを山札に移す。`;
    },
    effect() {
      return () => {
        console.log(`hello, healing: ${this.value} ${this.cost}`);
      };
    }
  }
};
</script>

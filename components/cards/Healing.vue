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
import { createNamespacedHelpers } from "vuex";
import Card from "~/components/Card.vue";

const { mapActions: mapHandsActions } = createNamespacedHelpers("hands");

export default {
  components: {
    Card
  },
  inheritAttrs: false,
  props: {
    id: {
      type: Number,
      required: true
    },
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
        this.discardHand(this.id);
      };
    }
  },
  methods: {
    ...mapHandsActions({
      discardHand: "discard"
    })
  }
};
</script>

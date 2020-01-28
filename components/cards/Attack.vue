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
      return `${this.value}ダメージを与える。`;
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

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
import { createNamespacedHelpers } from "vuex";
import Card from "~/components/Card.vue";

const { mapActions: mapPlayerActions } = createNamespacedHelpers("player");
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
      return `${this.value}ブロックを得る。`;
    },
    effect() {
      return () => {
        this.minusEnergy(this.cost);
        this.addBlocks(this.value);
        this.discardHand(this.id);
      };
    }
  },
  methods: {
    ...mapPlayerActions({
      minusEnergy: "minusEnergy",
      addBlocks: "addBlocks"
    }),
    ...mapHandsActions({
      discardHand: "discard"
    })
  }
};
</script>

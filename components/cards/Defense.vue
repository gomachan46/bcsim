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
        this.minusEnergy(this.cost);
        this.addBlocks(this.value);
      };
    }
  },
  methods: {
    ...mapPlayerActions({
      minusEnergy: "minusEnergy",
      addBlocks: "addBlocks"
    })
  }
};
</script>

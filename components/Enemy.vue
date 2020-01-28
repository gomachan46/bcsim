<template>
  <div @click="toggleSelection">
    <p>{{ name }}</p>
    <img :alt="name" src="/bc_icon.jpg" class="h-16 object-cover" />
    <p>HP: {{ hp }}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const {
  mapGetters: mapSelectedEnemyGetters,
  mapActions: mapSelectedEnemyActions
} = createNamespacedHelpers("selectedEnemy");

export default {
  components: {},
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    hp: {
      type: Number,
      required: true
    },
    atk: {
      type: Number,
      required: true
    },
    def: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapSelectedEnemyGetters({
      isSelected: "isSelected"
    })
  },
  methods: {
    toggleSelection() {
      if (this.isSelected({ id: this.id })) {
        this.clearEnemy();
      } else {
        this.setEnemy({ id: this.id });
      }
    },
    ...mapSelectedEnemyActions({
      setEnemy: "setEnemy",
      clearEnemy: "clearEnemy"
    })
  }
};
</script>

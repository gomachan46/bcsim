<template>
  <div @click="hello">
    <p>{{ name }}</p>
    <img :alt="name" src="/bc_icon.jpg" class="h-16 object-cover" />
    <p>HP: {{ hp }}</p>
  </div>
</template>

<script>
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
  computed: {},
  methods: {
    hello() {
      console.log("hello");
    }
  }
};
</script>

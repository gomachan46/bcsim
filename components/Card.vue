<template>
  <div class="max-w-sm rounded overflow-hidden shadow-sm">
    <div class="border-solid border-2 border-gray-200">
      <div class="flex justify-between px-6 pt-1">
        <div class="font-bold text-l mb-2">{{ cost }}</div>
        <div class="font-bold text-l mb-2">{{ title }}</div>
        <div class=""></div>
      </div>
      <img :src="image" :alt="title" class="w-full" />
      <div class="px-6 py-2">
        <div class="font-bold text-l mb-2">{{ type }}</div>
        <p class="text-gray-700 text-sm h-20">
          <template v-for="effect in effects">{{ effect }}</template>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    cost: {
      type: String,
      required: true
    },
    effects: {
      type: Array,
      required: true
    }
  }
};
</script>

<style></style>

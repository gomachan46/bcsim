<template>
  <div
    @click="effect"
    class="max-w-sm rounded overflow-hidden shadow-sm cursor-pointer p-1"
  >
    <div class="border-solid border-2 border-gray-200">
      <div class="flex justify-between px-6 py-1">
        <div class="font-bold text-l">{{ cost }}</div>
        <div class="font-bold text-l">{{ title }}</div>
        <div class=""></div>
      </div>
      <img :src="image" :alt="title" class="w-full h-32 object-cover" />
      <div class="px-2 py-1">
        <div class="font-bold text-l">{{ type }}</div>
        <p class="text-gray-700 text-sm h-24 pt-1">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
    text: {
      type: String,
      required: true
    },
    effect: {
      type: Function,
      required: true
    }
  }
};
</script>

<style></style>

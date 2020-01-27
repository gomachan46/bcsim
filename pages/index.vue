<template>
  <div class="container">
    <div class="flex flex-wrap">
      <template v-for="card in cards">
        <!-- eslint-disable-next-line vue/require-component-is -->
        <component
          class="w-1/6"
          :is="card.component"
          v-bind="card.props"
        ></component>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          component: "attack",
          props: { cost: 1, damage: 4 }
        },
        {
          component: "attack",
          props: { cost: 1, damage: 4 }
        },
        {
          component: "attack",
          props: { cost: 1, damage: 4 }
        },
        {
          component: "attack",
          props: { cost: 0, damage: 8 }
        },
        {
          component: "attack",
          props: { cost: 1, damage: 4 }
        },
        {
          component: "attack",
          props: { cost: 1, damage: 4 }
        },
        {
          component: "attack",
          props: { cost: 1, damage: 4 }
        }
      ]
    };
  }
};
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>

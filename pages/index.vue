<template>
  <div class="container">
    <div class="flex flex-wrap">
      <template v-for="card in cards">
        <!-- eslint-disable-next-line vue/require-component-is -->
        <component
          :is="card.component"
          v-bind="card.props"
          class="w-1/6"
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
          props: { cost: 1, value: 4 }
        },
        {
          component: "attack",
          props: { cost: 1, value: 4 }
        },
        {
          component: "attack",
          props: { cost: 1, value: 4 }
        },
        {
          component: "attack",
          props: { cost: 0, value: 8 }
        },
        {
          component: "attack",
          props: { cost: 1, value: 4 }
        },
        {
          component: "attack",
          props: { cost: 1, value: 4 }
        },
        {
          component: "attack",
          props: { cost: 1, value: 4 }
        },
        {
          component: "defense",
          props: { cost: 1, value: 4 }
        },
        {
          component: "defense",
          props: { cost: 0, value: 6 }
        },
        {
          component: "healing",
          props: { cost: 1, value: 5 }
        },
        {
          component: "healing",
          props: { cost: 0, value: 5 }
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

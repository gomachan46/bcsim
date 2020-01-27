<template>
  <div>
    <div class="flex justify-around">
      <div>
        <p>プレイヤー</p>
        <img src="/bc_icon.jpg" :alt="deckLength" class="h-16 object-cover" />
      </div>
      <div>
        <p>敵</p>
        <img src="/bc_icon.jpg" :alt="deckLength" class="h-16 object-cover" />
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex justify-around">
        <div class="w-12 mx-1 cursor-pointer">
          <p class="text-xs">山札</p>
          <img src="/bc_icon.jpg" :alt="deckLength" class="h-16 object-cover" />
          <p>{{ deckLength }}</p>
        </div>
        <div class="w-12 mx-1 cursor-pointer">
          <p class="text-xs">エナジー</p>
          <img src="/bc_icon.jpg" :alt="deckLength" class="h-16 object-cover" />
          <p>{{ deckLength }}</p>
        </div>
      </div>
      <div class="flex">
        <div class="w-12 mx-1 cursor-pointer">
          <p class="text-xs">パス</p>
          <img src="/bc_icon.jpg" :alt="deckLength" class="h-16 object-cover" />
        </div>
        <div class="w-12 mx-1 cursor-pointer">
          <p class="text-xs">捨て札</p>
          <img src="/bc_icon.jpg" :alt="deckLength" class="h-16 object-cover" />
          <p>{{ deckLength }}</p>
        </div>
      </div>
    </div>
    <div>
      <hands></hands>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import Hands from "~/components/Hands.vue";

const { mapGetters: mapDeckGetters } = createNamespacedHelpers("deck");
const { mapGetters: mapHandsGetters } = createNamespacedHelpers("hands");

export default {
  components: {
    Hands
  },
  computed: {
    ...mapDeckGetters({
      deckLength: "length"
    }),
    ...mapHandsGetters({
      handsLength: "length"
    })
  }
};
</script>

<style></style>

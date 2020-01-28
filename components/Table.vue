<template>
  <div>
    <div class="top-0 sticky z-10 bg-white">
      <div class="flex justify-around">
        <div>
          <p>プレイヤー</p>
          <img src="/bc_icon.jpg" alt="プレイヤー" class="h-16 object-cover" />
        </div>
        <div></div>
        <template v-for="enemy in enemies">
          <enemy
            :id="enemy.id"
            :name="enemy.name"
            :hp="enemy.hp"
            :atk="enemy.atk"
            :def="enemy.def"
          ></enemy>
        </template>
      </div>
      <div class="flex justify-between">
        <div class="flex justify-around">
          <div class="w-12 mx-1 cursor-pointer">
            <p class="text-xs">山札</p>
            <img src="/bc_icon.jpg" alt="山札" class="h-16 object-cover" />
            <p>{{ deckLength }}({{ blocks }})</p>
          </div>
          <div class="w-12 mx-1 cursor-pointer">
            <p class="text-xs">エナジー</p>
            <img src="/bc_icon.jpg" alt="エナジー" class="h-16 object-cover" />
            <p>{{ energy }}</p>
          </div>
        </div>
        <div class="flex">
          <div @click="initializeTable" class="w-12 mx-1 cursor-pointer">
            <p class="text-xs">パス</p>
            <img src="/bc_icon.jpg" alt="パス" class="h-16 object-cover" />
          </div>
          <div class="w-12 mx-1 cursor-pointer">
            <p class="text-xs">捨て札</p>
            <img src="/bc_icon.jpg" alt="捨て札" class="h-16 object-cover" />
            <p>{{ discardsLength }}</p>
          </div>
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
import Enemy from "~/components/Enemy.vue";

const { mapGetters: mapDeckGetters } = createNamespacedHelpers("deck");
const {
  mapGetters: mapHandsGetters,
  mapActions: mapHandsActions
} = createNamespacedHelpers("hands");
const { mapState: mapPlayerState } = createNamespacedHelpers("player");
const { mapGetters: mapDiscardsGetters } = createNamespacedHelpers("discards");
const { mapState: mapEnemiesState } = createNamespacedHelpers("enemies");
const { mapActions: mapDeckActions } = createNamespacedHelpers("deck");

export default {
  components: {
    Hands,
    Enemy
  },
  computed: {
    ...mapDeckGetters({
      deckLength: "length"
    }),
    ...mapHandsGetters({
      handsLength: "length"
    }),
    ...mapPlayerState({
      energy: ({ energy }) => energy,
      blocks: ({ blocks }) => blocks
    }),
    ...mapDiscardsGetters({
      discardsLength: "length"
    }),
    ...mapEnemiesState({
      enemies: ({ enemies }) => enemies
    })
  },
  data() {
    return {
      selectedHand: null,
      selectedEnemy: null
    };
  },
  methods: {
    async initializeTable() {
      await this.initializeDeck();
      const hands = await this.draw(6);
      await this.setHands(hands);
    },
    selectHand(card) {
      this.selectedHand = card;
    },
    selectEnemy(enemy) {
      this.selectedEnemy = enemy;
    },
    ...mapDeckActions({
      initializeDeck: "initialize",
      draw: "draw"
    }),
    ...mapHandsActions({
      setHands: "setCards"
    })
  }
};
</script>

<style></style>

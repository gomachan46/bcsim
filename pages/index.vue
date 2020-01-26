<template>
  <div class="container">
    <div class="flex flex-wrap">
      <template v-for="card in cards">
        <card
          :id="card.id"
          :image="card.image"
          :effects="card.effects"
          :type="card.type"
          :title="card.title"
          :cost="card.cost"
          class="w-1/6"
        ></card>
      </template>
    </div>
  </div>
</template>

<script>
import Card from "~/components/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          image: "/bc_icon.jpg",
          effects: ["4ダメージを与える。"],
          type: "攻撃",
          title: "攻撃",
          cost: "1"
        },
        {
          id: 2,
          image: "/bc_icon.jpg",
          effects: ["4ダメージを与える。"],
          type: "攻撃",
          title: "攻撃",
          cost: "1"
        },
        {
          id: 3,
          image: "/bc_icon.jpg",
          effects: ["4ダメージを与える。"],
          type: "攻撃",
          title: "攻撃",
          cost: "1"
        },
        {
          id: 4,
          image: "/bc_icon.jpg",
          effects: ["4ダメージを与える。"],
          type: "攻撃",
          title: "攻撃",
          cost: "1"
        },
        {
          id: 5,
          image: "/bc_icon.jpg",
          effects: ["4ダメージを与える。"],
          type: "攻撃",
          title: "攻撃",
          cost: "1"
        },
        {
          id: 6,
          image: "/bc_icon.jpg",
          effects: ["4ダメージを与える。"],
          type: "攻撃",
          title: "攻撃",
          cost: "1"
        },
        {
          id: 7,
          image: "/bc_icon.jpg",
          effects: ["4ダメージを与える。"],
          type: "攻撃",
          title: "攻撃",
          cost: "1"
        },
        {
          id: 8,
          image: "/bc_icon.jpg",
          effects: ["4ブロックを得る。"],
          type: "防御",
          title: "防御",
          cost: "1"
        },
        {
          id: 9,
          image: "/bc_icon.jpg",
          effects: ["4ブロックを得る。"],
          type: "防御",
          title: "防御",
          cost: "1"
        },
        {
          id: 10,
          image: "/bc_icon.jpg",
          effects: ["捨て札の5枚のランダムなカードを山札に移す。"],
          type: "スキル",
          title: "回復",
          cost: "1"
        },
        {
          id: 11,
          image: "/bc_icon.jpg",
          effects: ["捨て札の5枚のランダムなカードを山札に移す。"],
          type: "スキル",
          title: "回復",
          cost: "1"
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

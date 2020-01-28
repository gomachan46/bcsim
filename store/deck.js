import shuffle from "lodash/shuffle";

export const state = () => ({
  cards: []
});

export const getters = {
  length(store) {
    return store.cards.length;
  },
  nextCard(store) {
    return store.cards[0];
  }
};

export const mutations = {
  setCards(state, cards) {
    state.cards = cards;
  },
  shiftCard(state) {
    state.cards.shift();
  }
};

export const actions = {
  initialize({ commit }) {
    const cards = [
      {
        component: "attack",
        props: { id: 1, cost: 1, value: 4 }
      },
      {
        component: "attack",
        props: { id: 2, cost: 1, value: 4 }
      },
      {
        component: "attack",
        props: { id: 3, cost: 1, value: 4 }
      },
      {
        component: "attack",
        props: { id: 3, cost: 0, value: 8 }
      },
      {
        component: "attack",
        props: { id: 4, cost: 1, value: 4 }
      },
      {
        component: "attack",
        props: { id: 5, cost: 1, value: 4 }
      },
      {
        component: "attack",
        props: { id: 6, cost: 1, value: 4 }
      },
      {
        component: "defense",
        props: { id: 7, cost: 1, value: 4 }
      },
      {
        component: "defense",
        props: { id: 8, cost: 0, value: 6 }
      },
      {
        component: "healing",
        props: { id: 9, cost: 1, value: 5 }
      },
      {
        component: "healing",
        props: { id: 10, cost: 0, value: 5 }
      }
    ];

    commit("setCards", shuffle(cards));
  },
  setCards({ commit }, cards) {
    commit("setCards", cards);
  },
  draw({ commit, getters }, amount) {
    return [...Array(amount)].map(() => {
      const card = getters.nextCard;
      commit("shiftCard", amount);

      return card;
    });
  }
};

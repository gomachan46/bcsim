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
        props: { id: 1, cost: 1, value: 4 }
      },
      {
        component: "defense",
        props: { id: 2, cost: 0, value: 6 }
      },
      {
        component: "healing",
        props: { cost: 1, value: 5 }
      },
      {
        component: "healing",
        props: { cost: 0, value: 5 }
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

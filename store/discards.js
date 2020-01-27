export const state = () => ({
  cards: []
});

export const getters = {
  length(store) {
    return store.cards.length;
  }
};

export const mutations = {
  setCards(state, cards) {
    state.cards = cards;
  }
};

export const actions = {
  setCards({ commit }, cards) {
    commit("setCards", cards);
  }
};

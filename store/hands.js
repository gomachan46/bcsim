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
  },
  subCard(state, cardId) {
    console.log(cardId);
    console.log(state.cards);
    state.cards = state.cards.filter(c => c.props.id !== cardId);
  }
};

export const actions = {
  setCards({ commit }, cards) {
    commit("setCards", cards);
  },
  discard({ commit }, cardId) {
    commit("subCard", cardId);
  }
};

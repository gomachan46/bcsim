export const state = () => ({
  card: null
});

export const getters = {
  isSelected({ card }) {
    return target => {
      if (card === null) {
        return false;
      }

      return card.id === target.id;
    };
  }
};

export const mutations = {
  setCard(state, card) {
    state.card = card;
  },
  clearCard(state) {
    state.card = null;
  }
};

export const actions = {
  setCard({ commit }, card) {
    commit("setCard", card);
  },
  clearCard({ commit }) {
    commit("clearCard");
  }
};

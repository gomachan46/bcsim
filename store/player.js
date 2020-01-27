export const state = () => ({
  energy: 3,
  atk: 0,
  def: 0,
  block: 0
});

export const getters = {};

export const mutations = {
  minusEnergy(state, amount) {
    state.energy = amount;
  }
};

export const actions = {
  minusEnergy({ commit }, amount) {
    commit("minusEnergy", amount);
  }
};

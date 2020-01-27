export const state = () => ({
  energy: 3,
  atk: 0,
  def: 0,
  blocks: 0
});

export const getters = {};

export const mutations = {
  minusEnergy(state, amount) {
    state.energy -= amount;
  },
  addBlocks(state, amount) {
    state.blocks += amount;
  }
};

export const actions = {
  minusEnergy({ commit }, amount) {
    commit("minusEnergy", amount);
  },
  addBlocks({ commit }, amount) {
    commit("addBlocks", amount);
  }
};

export const state = () => ({
  enemy: null
});

export const getters = {
  isSelected({ enemy }) {
    return target => {
      if (enemy === null) {
        return false;
      }

      return enemy.id === target.id;
    };
  }
};

export const mutations = {
  setEnemy(state, enemy) {
    state.enemy = enemy;
  },
  clearEnemy(state) {
    state.enemy = null;
  }
};

export const actions = {
  setEnemy({ commit }, enemy) {
    commit("setEnemy", enemy);
  },
  clearEnemy({ commit }) {
    commit("clearEnemy");
  }
};

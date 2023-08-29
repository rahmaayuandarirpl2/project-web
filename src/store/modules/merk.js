import axios from "axios";

const merk = {
    namespaced: true,
    state: {
        merkData: [],
    },
    getters: {
        getMerk: (state) => state.merkData,
    },
    actions: {
        async fetchMerk({ commit }) {
            try {
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/all-brands"
                );
                commit("SET_MERK", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_MERK(state, merk) {
            state.merkData = merk;
        },
    },
};

export default merk;
export const strict = false;
import { ActionTree } from 'vuex';

export type RootState = ReturnType<typeof state>;

export const state = () => ({
    conversionItem: null,
});

export const mutations: any = {
    setConversionItem(state: any, conversionItem: any) {
        state.conversionItem = conversionItem;
    },
};

export const actions: ActionTree<RootState, RootState> = {
    setConversionItem({ commit }, userData) {
        commit('setConversionItem', userData);
    },
};

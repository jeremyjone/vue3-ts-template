/*
 * @Author: JeremyJone
 * @Date: 2022-01-12 15:41:43
 * @LastEditors: JeremyJone
 * @LastEditTime: 2022-01-12 15:53:24
 * @Description: 带多个模块的状态管理文件示例
 */

import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store, Module } from 'vuex';

interface ModuleAState {
  // TODO: 根据 state 实际内容修改
  count: number;
}

interface ModuleBState {
  // TODO: 根据 state 实际内容修改
  count: number;
}

export interface RootState {
  moduleA: ModuleAState;
  moduleB: ModuleBState;
}

const moduleA: Module<ModuleAState, RootState> = {
  namespaced: true,

  state: {
    // TODO: 根据实际内容修改
    count: 0
  },
  mutations: {},
  actions: {}
};

const moduleB: Module<ModuleBState, RootState> = {
  namespaced: true,

  state: {
    // TODO: 根据实际内容修改
    count: 0 // 通过 store.state.moduleB.count 访问
  },
  mutations: {
    increment(state) {
      state.count += 1;
    }
  },
  actions: {
    /**
     * 这里通过 store.dispatch('moduleB/increment') 调用
     */
    increment(contenxt) {
      contenxt.commit('increment');
    }
  }
};

export const key: InjectionKey<Store<RootState>> = Symbol('store_key');
export default createStore({
  strict: true,
  mutations: {},
  actions: {},
  // *注意*：这里的模块名称要和 RootState 中的名称保持一致
  modules: { moduleA, moduleB }
});

/**
 * 定义自己的 `useStore` 组合式函数
 * 使用时，只需要引入该方法：
 *     import { useStore } from './store'
 *
 * 即可使用。
 *     setup() {
 *         const store = useStore();
 *         store.state.count // 类型为 number
 *     }
 */
export function useStore() {
  return baseUseStore(key);
}

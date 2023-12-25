import { create } from 'zustand'


interface CounterState {
  count: number
  increase: (by: number) => void
}


export const useCountStore = create<CounterState>((set) => ({
  count: 1,
  increase: (by) => set((state) => ({ count: state.count + by })),
}))



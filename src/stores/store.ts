import {create} from 'zustand';

interface ScrollStore {
  scroll: number;
  setScroll: (scroll: number) => void;
}

const useScrollStore = create<ScrollStore>((set) => ({
  scroll: 0,
  setScroll: (scroll: number) => set(() => ({scroll})),
}));

export default useScrollStore;

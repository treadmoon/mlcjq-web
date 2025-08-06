import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const useBearStore = create((set, get) => {
  // console.log("load useBearStore set：", set);
  // console.log("load useBearStore get：", get);

  const increasePopulation = () => {
    set((state) => ({ bears: state.bears + 1 }));
  };

  const upnuts = (params) => {
    console.log("upnuts params", params);
    set((state) => ({
      nuts: state.nuts,
    }));
    return set;
  };

  const removeAllBears = () => {
    set({ bears: 0 });
  };

  const upBears = (val) => {
    set({
      bears: val,
    });
  };

  return {
    bears: 0,
    nuts: ["nut"],
    honey: "honey",
    increasePopulation,
    removeAllBears,
    upnuts,
    upBears,
    deleteEverything: () => set({}, true),
    paw: true,
  };
});

export const userStore = create((set) => ({
  firstName: "",
  lastName: "",
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

export const useCountStore = create((set, get) => ({
  count: 0,
  other: "other",
  add: () => set((store) => ({ count: store.count + 1 })),
}));

export const useDogStore = create((set) => {
  return {
    paw: true,
    foo: 1,
    upFoo: () => {
      set({
        foo: (Math.random() * 99).toFixed(),
      });
    },
  };
});

export const useCatStore = create(
  subscribeWithSelector(() => ({ paw: true, snout: true, fur: true }))
);

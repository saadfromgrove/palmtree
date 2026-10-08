import { create } from "zustand";

interface AccountExist {
  accountExists: boolean;
  setAccountExists: (accountExists: boolean) => void;
}

export const useAccountExist = create<AccountExist>((set) => ({
  accountExists: false,

  setAccountExists: (accountExists) => {
    set({ accountExists });
  },
}));

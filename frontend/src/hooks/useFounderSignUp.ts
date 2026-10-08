import { create } from "zustand";

interface FounderAccountSignUp {
  contact: number | null;
  aadharCard: number | null;

  setContact: (contact: number) => void;
  setAadharCard: (aadharCard: number) => void;

  reset: () => void;
}

export const useFounderSignUp = create<FounderAccountSignUp>((set) => ({
  contact: null,
  aadharCard: null,

  setContact: (contact) => {
    set({ contact });
  },

  setAadharCard: (aadharCard) => {
    set({ aadharCard });
  },

  reset: () => {
    set({ contact: null, aadharCard: null });
  },
}));

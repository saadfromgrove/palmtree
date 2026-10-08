import { create } from "zustand";

interface FounderAccountSignUp {
  contact: string;
  aadharCard: string;

  setContact: (contact: string) => void;
  setAadharCard: (aadharCard: string) => void;

  reset: () => void;
}

export const useFounderSignUp = create<FounderAccountSignUp>((set) => ({
  contact: "",
  aadharCard: "",

  setContact: (contact) => {
    set({ contact });
  },

  setAadharCard: (aadharCard) => {
    set({ aadharCard });
  },

  reset: () => {
    set({ contact: "", aadharCard: "" });
  },
}));

import { User } from "@/types/user-types";
import { create } from "zustand";

type UserDataStore = {
  user: User | null;
  setUserData: (userObject: User) => void;
};

export const useUserDataStore = create<UserDataStore>((set) => ({
  user: null,
  setUserData: (userObject) => set({ user: userObject }),
}));

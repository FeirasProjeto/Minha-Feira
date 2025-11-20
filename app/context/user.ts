import { User } from "@/types/user"
import { create } from 'zustand'

type UserStore = {
  Usuario: User
  logaUsuario: (userLogado: User) => void
  deslogaUsuario: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  Usuario: {} as User,
  logaUsuario: (userLogado) => set({ Usuario: userLogado }),
  deslogaUsuario: () => set({ Usuario: {} as User }),
}))
import { create } from 'zustand';
import { Boutiques } from '../generated/graphql';

// 自定义类型，简化系统用户类型
export interface CurrentUser {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
}

interface UserBoutiqueState {
  // 状态
  currentUser: CurrentUser | null;
  userBoutique: Boutiques | null;
  loading: boolean;
  error: string | null;
  
  // Actions
  setCurrentUser: (user: CurrentUser | null) => void;
  setUserBoutique: (boutique: Boutiques | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // 清除状态
  reset: () => void;
}

export const useUserBoutiqueStore = create<UserBoutiqueState>((set) => ({
  // 初始状态
  currentUser: null,
  userBoutique: null,
  loading: false,
  error: null,
  
  // Actions
  setCurrentUser: (user: CurrentUser | null) => set({ currentUser: user }),
  setUserBoutique: (boutique: Boutiques | null) => set({ userBoutique: boutique }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
  
  // 重置状态
  reset: () => set({
    currentUser: null,
    userBoutique: null,
    loading: false,
    error: null,
  }),
}));

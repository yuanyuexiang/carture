import { create } from 'zustand';
import { BusinessBoutiques } from '../generated/business-graphql';

// 自定义类型，简化系统用户类型
export interface CurrentUser {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
}

interface UserBoutiqueStore {
  // 当前用户信息
  currentUser: CurrentUser | null;
  
  // 用户店铺信息
  userBoutique: BusinessBoutiques | null;
  
  // 状态
  loading: boolean;
  error: string | null;
  
  // Actions
  setCurrentUser: (user: CurrentUser | null) => void;
  setUserBoutique: (boutique: BusinessBoutiques | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useUserBoutiqueStore = create<UserBoutiqueStore>((set) => ({
  // 初始状态
  currentUser: null,
  userBoutique: null,
  loading: false,
  error: null,
  
  // Actions
  setCurrentUser: (user: CurrentUser | null) => set({ currentUser: user }),
  setUserBoutique: (boutique: BusinessBoutiques | null) => set({ userBoutique: boutique }),
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

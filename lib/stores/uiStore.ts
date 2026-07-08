'use client'

import { create } from 'zustand'

interface UIStore {
  isDarkMode: boolean
  isSidebarOpen: boolean
  isProfileOpen: boolean
  setDarkMode: (isDark: boolean) => void
  setSidebarOpen: (isOpen: boolean) => void
  setProfileOpen: (isOpen: boolean) => void
  toggleDarkMode: () => void
  toggleSidebar: () => void
  toggleProfile: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  isDarkMode: false,
  isSidebarOpen: true,
  isProfileOpen: false,
  setDarkMode: (isDark) => set({ isDarkMode: isDark }),
  setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
  setProfileOpen: (isOpen) => set({ isProfileOpen: isOpen }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  toggleProfile: () => set((state) => ({ isProfileOpen: !state.isProfileOpen })),
}))
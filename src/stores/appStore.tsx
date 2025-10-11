import { create } from "zustand";

interface MessagePreview {
  id: string;
  contactName: string;
  contactAvatar: string;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
}

interface AppStoreState {
  // UI state
  currentPage: string;
  setCurrentPage: (pageId: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;

  // Wallet
  walletBalance: number;
  setWalletBalance: (amount: number) => void;

  // Messages
  messages: MessagePreview[];
}

export const useAppStore = create<AppStoreState>((set) => ({
  currentPage: "dashboard",
  setCurrentPage: (pageId) => set({ currentPage: pageId }),
  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  walletBalance: 325.75,
  setWalletBalance: (amount) => set({ walletBalance: amount }),

  messages: [
    {
      id: "c1",
      contactName: "Ahmed Al-Rashid",
      contactAvatar: "https://placehold.co/40x40",
      lastMessage: "See you at 8:30 PM near the station.",
      timestamp: "10:12 AM",
      unread: true,
    },
    {
      id: "c2",
      contactName: "Sara Mohammed",
      contactAvatar: "https://placehold.co/40x40",
      lastMessage: "Thanks for the ride!",
      timestamp: "Yesterday",
    },
    {
      id: "c3",
      contactName: "Omar Khalid",
      contactAvatar: "https://placehold.co/40x40",
      lastMessage: "I'll share the location.",
      timestamp: "Mon",
    },
  ],
}));

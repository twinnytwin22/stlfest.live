import { create } from 'zustand';

interface SiteStoreInterface {
    focusedImage: string | null;
    setFocusedImage: (focusedImage: string | null) => void;
    showVendors: boolean;
    setShowVendors: (showVendors: boolean) => void;
    vendors: string[];
    setVendors: (vendors: string[]) => void;
}

export const useSiteStore = create<SiteStoreInterface>((set) => ({
    focusedImage: null,
    setFocusedImage: (focusedImage: string | null) => set({ focusedImage }),
    showVendors: false,
    setShowVendors: (showVendors: boolean) => set({ showVendors }),
    vendors: ['/images/retail-2024.JPG', '/images/food-vendors-2024.JPG','/images/community-vendors-2024.JPG'],
    setVendors: (vendors: string[]) => set({ vendors }),
}));

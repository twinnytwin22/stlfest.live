import {create} from 'zustand'

interface SiteStoreInterface {
    focusedImage: string | null;
    setFocusedImage: (focusedImage: string) => void;
}

export const useSiteStore = create<SiteStoreInterface>((set) => ({
    focusedImage: null,
    setFocusedImage: (focusedImage: string) => set({focusedImage})
}))
import create from 'zustand';

const useThemeStore = create((set) => ({
  theme: 'light',
  colors: {
    primary: '#2563eb',
    secondary: '#4f46e5',
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  setColor: (key, value) => set((state) => ({ colors: {...state.colors, [key]: value} })),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  savePreset: (name) => {
    const preset = useThemeStore.getState();
    localStorage.setItem(`theme-${name}`, JSON.stringify(preset));
  },
}));

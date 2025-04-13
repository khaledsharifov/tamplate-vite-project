import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('theme') as Theme) ?? 'light';
  }
  return 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = window.document.documentElement;
    const oppositeTheme = theme === 'dark' ? 'light' : 'dark';

    root.classList.remove(oppositeTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
};

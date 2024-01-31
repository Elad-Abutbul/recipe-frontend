import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add('bg-slate-800');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('bg-slate-800');
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { handleThemeSwitch, theme };
};

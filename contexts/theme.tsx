import { ReactNode, createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext(
  {
    themeName: 'dark',
    toggleTheme: () => { },
  }
)

const ThemeProvider = ({ children }: { children: ReactNode }) => {

  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setThemeName(
      localStorage.getItem('themeName') ||
      (darkMediaQuery.matches ? 'dark' : 'light')
    );
  }, []);

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }

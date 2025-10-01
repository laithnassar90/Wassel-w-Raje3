<<<<<<< HEAD
// src/utils/applyTheme.js
import theme from '../theme.json';

export const applyTheme = () => {
  Object.entries(theme.colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
=======
// src/utils/applyTheme.js
import theme from '../theme.json';

export const applyTheme = () => {
  Object.entries(theme.colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
>>>>>>> 6090fceb (Initial commit of all components)
};
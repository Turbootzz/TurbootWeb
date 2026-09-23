// Inline <head> script that applies the stored theme before first paint, so pages
// don't flash light mode before ThemeProvider hydrates.
export const THEME_SCRIPT = `
  (function() {
    try {
      const theme = localStorage.getItem('theme') || 'system';
      const root = document.documentElement;

      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        root.classList.add(systemTheme);
      } else {
        root.classList.add(theme);
      }
    } catch (e) {}
  })();
`

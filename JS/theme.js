const themeToggleBtns = document.querySelectorAll('#theme-toggle-btn');
const toggleBtnSprite = document.querySelectorAll('#theme-toggle-btn-sprite');

/* theme and button state ( dark mode or light mode ) */
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
  document.body.classList.add('is-dark-mode');
  localStorage.setItem('dark-mode', 'enabled');
  localStorage.setItem('theme-button', 'dark-mode');
  toggleBtnSprite.forEach(function (buttonSprite) {
    buttonSprite.classList.add('theme-state-dark');
    buttonSprite.classList.remove('theme-state-light');
  });
};

const disableDarkMode = () => {
  document.body.classList.remove('is-dark-mode');
  localStorage.setItem('dark-mode', 'disabled');
  localStorage.setItem('theme-button', 'light-mode');
  toggleBtnSprite.forEach(function (buttonSprite) {
    buttonSprite.classList.remove('theme-state-dark');
    buttonSprite.classList.add('theme-state-light');
  });
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

themeToggleBtns.forEach(function (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', (e) => {
    darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
});

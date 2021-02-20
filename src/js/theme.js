const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchRef = document.querySelector('#theme-switch-toggle');

themeSwitchRef.addEventListener('change', switchTheme);

setDefaultTheme();
checkDarkTheme();

// Set default theme
function setDefaultTheme() {
    document.body.classList.add(Theme.LIGHT);

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        const parsedTheme = JSON.parse(currentTheme);
        document.body.classList.add(parsedTheme);
    }
};

// Switching theme
// function switchTheme(event) {
//     if (event.target.checked) {
//         document.body.classList.replace(Theme.LIGHT, Theme.DARK);
//         localStorage.setItem('theme', JSON.stringify(Theme.DARK));
//     } else {
//         document.body.classList.replace(Theme.DARK, Theme.LIGHT);
//         localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
//     }
// };

// alternative theme switching
function switchTheme(event) {
    if (event.target.checked) {
        setDark()
    } else {
        setLight()
    }
};
function setDark() { 
document.body.classList.replace(Theme.LIGHT, Theme.DARK);
 localStorage.setItem('theme', JSON.stringify(Theme.DARK));
}
function setLight() {
document.body.classList.replace(Theme.DARK, Theme.LIGHT);
localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}

// Check if the theme is dark
function checkDarkTheme() {
    if (document.body.classList.contains(Theme.DARK)) {
        themeSwitchRef.checked = true;
        document.body.classList.remove(Theme.LIGHT)
    }
}

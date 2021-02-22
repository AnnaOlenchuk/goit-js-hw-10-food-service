const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchRef = document.querySelector('#theme-switch-toggle');

themeSwitchRef.addEventListener('change', switchTheme);

setDefaultTheme();
checkDarkTheme();

function updateTheme(fromTheme, toTheme) {
    document.body.classList.replace(Theme[fromTheme], Theme[toTheme]);
    localStorage.setItem('theme', JSON.stringify(Theme[toTheme]));
}

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
//         updateTheme(Theme.LIGHT, Theme.DARK);
//     } else {
//         updateTheme(Theme.DARK, Theme.LIGHT);
//     }
// };

// alternative theme switching
function switchTheme(event) {
    if (event.target.checked) {
        updateTheme(Theme.LIGHT, Theme.DARK);
    } else {
        updateTheme(Theme.DARK, Theme.LIGHT);
    }
};

// Check if the theme is dark
function checkDarkTheme() {
    if (document.body.classList.contains(Theme.DARK)) {
        themeSwitchRef.checked = true;
        document.body.classList.remove(Theme.LIGHT)
    }
}
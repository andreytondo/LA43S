export function isDarkMode() {
    return document.documentElement.getAttribute('data-bs-theme') === 'dark';
}

export function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
}

export function handleThemeToggle() {
    const themeButton = document.getElementById("theme-button");

    themeButton.onclick = function(event) {
        if (isDarkMode()) {
            setTheme('light');
        }
        else {
            setTheme('dark');
        }
        event.preventDefault();
    }
}

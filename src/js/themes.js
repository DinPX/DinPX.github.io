let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
    setTheme('xp');
} else {
    setTheme(style);
}

for (let i of switches) {
    i.addEventListener('click', function () {
        let theme = this.dataset.theme;
        setTheme(theme);
    });
}

function setTheme(theme) {
    if (theme == 'xp') {
        document.getElementById('switcher-id').href = 'src/css/themes/homepage/xp.css';
    } else if (theme == 'sakura') {
        document.getElementById('switcher-id').href = 'src/css/themes/homepage/sakura.css';
    }
    localStorage.setItem('style', theme);
}
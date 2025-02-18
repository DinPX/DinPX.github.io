let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
    setTheme('halloween');
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
        document.getElementById('chattable').src = document.getElementById('chattable').src
        chattable.initialize({stylesheet : "src/css/themes/chattable/xp.css"});
    } else if (theme == 'sakura') {
        document.getElementById('switcher-id').href = 'src/css/themes/homepage/sakura.css';
        document.getElementById('chattable').src = document.getElementById('chattable').src
        chattable.initialize({stylesheet : "src/css/themes/chattable/sakura.css"});
    } else if (theme == 'halloween') {
        document.getElementById('switcher-id').href = 'src/css/themes/homepage/halloween.css';
        document.getElementById('chattable').src = document.getElementById('chattable').src
        chattable.initialize({stylesheet : "src/css/themes/chattable/halloween.css"});
    }
    localStorage.setItem('style', theme);
}
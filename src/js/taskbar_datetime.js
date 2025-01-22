// Taskbar date and time
function setEmbed() {
    let linkEmbedTxtBox = document.querySelector('#btnEmbed');
    linkEmbedTxtBox.value = '<a href="dinpixels.neocities.org" target="_blank"><a/>';
}

function showTime() {
    let timeTxt = document.querySelector('.time');
    let dateTxt = document.querySelector('.date');
    const now = new Date();
    timeTxt.textContent = now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
    dateTxt.textContent = now.toLocaleDateString();
}

setEmbed();
setInterval(showTime, 1000);
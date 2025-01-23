// Taskbar date and time
function showTime() {
    let timeTxt = document.querySelector('.time');
    let dateTxt = document.querySelector('.date');
    const now = new Date();
    timeTxt.textContent = now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
    dateTxt.textContent = now.toLocaleDateString();
}

setInterval(showTime, 1000);
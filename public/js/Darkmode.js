const darkModeEnabled = localStorage.getItem("darkmodesettings");
if (darkModeEnabled == "on") {
    document.querySelector("html").classList.toggle('darkmode');
}

document.querySelector('.icons--moon').addEventListener('click', e => {
    if (darkModeEnabled == null || darkModeEnabled == "off") {
        localStorage.setItem('darkmodesettings', 'on');
    }
    else {
        localStorage.setItem('darkmodesettings', 'off');
    }

    document.querySelector("html").classList.toggle('darkmode');
});
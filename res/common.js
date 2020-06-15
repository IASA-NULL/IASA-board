if (location.protocol === 'http:') {
    document.querySelector('body').style.display = 'none';
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

document.addEventListener("DOMContentLoaded", function () {
    //The first argument are the elements to which the plugin shall be initialized
    //The second argument has to be at least a empty object or a object with your desired options
    inst = OverlayScrollbars(document.querySelectorAll("body"), {});
});
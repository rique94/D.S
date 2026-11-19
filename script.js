function ajustarHeader() {
    const nav = document.getElementById("nav-h1");
    const header = document.querySelector("header");
    document.getElementById("big-text").style.minWidth = nav.offsetWidth + "px";
    header.style.paddingTop = nav.offsetHeight + 60 + "px";
}
window.addEventListener("load", ajustarHeader);
window.addEventListener("resize", ajustarHeader);

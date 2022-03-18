const viewMenuButton = document.querySelector(".view_menue");
const closeMenuButton = document.querySelector(".close-menue");
const menu = document.querySelector(".menu");

viewMenuButton.addEventListener("click", handleToggleViewMenu);
closeMenuButton.addEventListener("click", handleToggleViewMenu);

function handleToggleViewMenu(event) {
    menu.classList.toggle("open-menu");
    document.body.classList.toggle("menu-opened-body");
    viewMenuButton.classList.toggle("hide_view_menue");
    closeMenuButton.classList.toggle("hide_close-menue");
}

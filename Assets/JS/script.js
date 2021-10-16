const navBtn = document.getElementById("nav-btn");
const menuList = document.getElementById("menu")



$("#nav-btn").on("click", () => {
    menuList.classList.toggle("hide");
    navBtn.classList.toggle("hide");
});

$("#menu").on("click", () => {
     menuList.classList.toggle("hide");
    navBtn.classList.toggle("hide");
})
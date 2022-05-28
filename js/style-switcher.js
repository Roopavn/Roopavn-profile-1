/*=================taggle style switcher=======*/
const styleSwitcherTaggle = document.querySelector(".style-switcher-taggler");
styleSwitcherTaggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.taggle("open");
})
/*==========================hide style-switcher o scroll========*/
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ================ theme colors=========*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
/* ================ theme light and dark mode=========*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.taggle("fa-sun");
    dayNight.querySelector("i").classList.taggle("fa-moon");
    document.body.classList.taggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
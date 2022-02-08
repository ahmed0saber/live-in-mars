nav = document.getElementsByClassName("links")[0];
nav_btn = document.getElementsByClassName("nav-toggler")[0];
var open = false;
function toggle(){
    if(open){
        nav_btn.classList.remove("fa-close");
        nav_btn.classList.add("fa-bars");
        nav.style.display = "none";
        open = false;
    }else{
        nav_btn.classList.add("fa-close");
        nav_btn.classList.remove("fa-bars");
        nav.style.display = "flex";
        open = true;
    }
}
function check_screen(){
    if(window.innerWidth >= 901){
        nav.style.display = "flex";
    }else{
        if(!open){
            nav.style.display = "none";
        }
    }
}
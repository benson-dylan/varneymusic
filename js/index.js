const navBar = document.getElementById("navBar");
window.scroll(function (){
    var scroll = window.scrollY;
    console.log(scrollY)
    if (scroll >= 20)
    {
        navBar.style.display = 'flex';
    }
    else
    {
        navBar.style.display = 'none';
    }
});
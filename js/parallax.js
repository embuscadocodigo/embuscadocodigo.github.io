function deLadinho () {
    var mov01 = window.scrollY;
    document.querySelector('.mov_parallax_01').style.marginLeft = +(mov01*2+15)+"px";
}
window.addEventListener('scroll', deLadinho);
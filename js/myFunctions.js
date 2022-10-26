// BTN BACK TOP
let btnBackTop=document.getElementById('btnBackTop');
window.onscroll=function(){
scrollFunction();
}
function scrollFunction(){
if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
    btnBackTop.style.display='block';
}
else{
    btnBackTop.style.display='none';
}
}

function topFunction(){
document.body.scrollTop=0;
document.documentElement.scrollTop=0
}

// Loader
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementsByTagName('body').style.display="block"
}
AOS.init();

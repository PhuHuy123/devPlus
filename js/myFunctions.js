// BTN BACK TOP
let btnBackTop=document.getElementById('btnBackTop');
window.onscroll=function(){
scrollFunction();
}
// function scrollFunction(){

// }

function topFunction(){
document.body.scrollTop=0;
document.documentElement.scrollTop=0
}
function scrollFunction() {
  if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
    btnBackTop.style.display='block';
  }
  else{
      btnBackTop.style.display='none';
  }


  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-90px";
  }
  if (
    document.body.scrollTop == 0 ||
    document.documentElement.scrollTop == 0
  ) {
    document.getElementById("header").style.top = "0px";
  }
}

// Loader
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
  document.getElementsByClassName
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementsByTagName('body').style.display="block"
}
AOS.init();

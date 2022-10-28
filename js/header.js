function imgFunction(input) {
  const img = document.getElementsByClassName("carousel-item");
  for (let i = 0; i < img.length; i++) {
    img[i].className = "carousel-item";
  }

  img[input - 1].className = "carousel-item active";
}

window.onscroll = function () {
  headerFunction();
};

function headerFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-90px";
  }
  if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
    document.getElementById("header").style.top = "0px";
  }
}

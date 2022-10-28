function imgFunction(input) {
  const img = document.getElementsByClassName("carousel-item");
  for (let i = 0; i < img.length; i++) {
    img[i].className = "carousel-item";
  }

  img[input - 1].className = "carousel-item active";
}

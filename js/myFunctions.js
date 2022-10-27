// BTN BACK TOP
let btnBackTop = document.getElementById("btnBackTop");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    btnBackTop.style.display = "block";
  } else {
    btnBackTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Loader
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementsByTagName("body").style.display = "block";
}
AOS.init();

// Slick Slider Events
$(document).ready(function () {
  // $(".alumni-saying").slick({
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // });
});
//End Slick Slider Events

// Function play video 
let btn = document.querySelector(".video-play");
let video = document.querySelector(".video-hide");
let closeVideo = document.querySelector(".video-close");

btn.onclick = function () {
  btn.classList.add("active");
  video.classList.add("active");
};

closeVideo.onclick = function () {
  btn.classList.remove("active");
  video.classList.remove("active");
};
//End Function play video

let imgCount = 0
const data = [
  {role: 'Member Devplus ++', img: '../images/Alumni/person3.png', name: 'Thatsadaphone Inthapakdy', description: 'Dev plus help me to re-train about knowledge with technology, experience how to do the real project with senior developers by testing their current project, and share more experience with them. enjoy more events and workshops.'},
  {role: 'Member Devplus ++', img: '../images/Alumni/person2.png', name: 'Quynh Nga', description: 'I learnt a lot of knowledge from experienced seniors of Dev plus. They help me to understand the procedure in running a real project. Additionally, taking part in activities such as workshops promote my soft skills.'},
  {role: 'Member Devplus ++', img: '../images/Alumni/person1.png', name: 'Tien Thinh', description: 'This is an awesome programme which supports me too much in enhancing my skills and knowledge to become a developer. I feel very lucky because of joining Devplus.'},
]
const frame = document.body.querySelector('.frame')
data.forEach(_data => appendCard(_data))

let current = frame.querySelector('.card-custom:last-child')
let likeText = current.children[0]
let startX = 0, startY = 0, moveX = 0, moveY = 0
initCard(current)

function appendCard(data) {
  const firstCard = frame.children[0]
  const newCard = document.createElement('div')
  newCard.className = 'card-custom'
  newCard.innerHTML = `
  <div class="alumni-saying-detail">
  <div class="alumni-quote">
    <img class="alumni-quote-icon" src="../images/Alumni/quote2.png"></img>
    <div class="alumni-quote-description">${data.description}</div>
    <div class="alumni-quote-info">
      <img src="${data.img}" alt="">
      <div class="alumni-name">${data.name}</div>
      <div class="alumni-position">${data.role}</div>
    </div>
  </div>
</div>
        `
  if (firstCard) frame.insertBefore(newCard, firstCard)
  else frame.appendChild(newCard)
  imgCount++
}

function initCard(card) {
  card.addEventListener('pointerdown', onPointerDown)
}

function setTransform(x, y, deg, duration) {
  current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${deg}deg)`
  likeText.style.opacity = Math.abs((x / innerWidth * 2.1))
  likeText.className = `is-like ${x > 0 ? 'like' : 'nope'}`
  if (duration) current.style.transition = `transform ${duration}ms`
}

function onPointerDown({ clientX, clientY }) {
  startX = clientX
  startY = clientY
  current.addEventListener('pointermove', onPointerMove)
  current.addEventListener('pointerup', onPointerUp)
  current.addEventListener('pointerleave', onPointerUp)
}

function onPointerMove({ clientX, clientY }) {
  moveX = clientX - startX
  moveY = clientY - startY
  setTransform(moveX, moveY, moveX / innerWidth * 50)
}

function onPointerUp() {
  current.removeEventListener('pointermove', onPointerMove)
  current.removeEventListener('pointerup', onPointerUp)
  current.removeEventListener('pointerleave', onPointerUp)
  if (Math.abs(moveX) > frame.clientWidth / 2) {
    current.removeEventListener('pointerdown', onPointerDown)
    complete()
  } else cancel()
}

function complete() {
  const flyX = (Math.abs(moveX) / moveX) * innerWidth * 1.3
  const flyY = (moveY / moveX) * flyX
  setTransform(flyX, flyY, flyX / innerWidth * 50, innerWidth)

  const prev = current
  const next = current.previousElementSibling
  if (next) initCard(next)
  current = next
  likeText = current.children[0]
  appendCard(data[imgCount % 4])
  setTimeout(() => frame.removeChild(prev), innerWidth)
}

function cancel() {
  setTransform(0, 0, 0, 100)
  setTimeout(() => current.style.transition = '', 100)
}
let imageIndex = 0;
const imageInfo = [
  {
    title: '슈퍼패미콤판 펀치아웃 설명',
    fileName: 'Super Punch-Out SNES.jpg',
  },
  {
    title: '아카트로닉스 케이브 라인업',
    fileName: 'Akatronics.jpg',
  },
  {
    title: '정인게임장의 흔적',
    fileName: 'Jeong-In Game Center was here.jpg',
  },
  {
    title: '노량진 어뮤즈타운',
    fileName: 'Amusetown.jpg',
  },
];

let zoom = 1;
let x = 0;
let y = 0;

/**
 * @todo
 * Implement on-click prev/next button (Completed)
 * Implement expanding/shrinking image (Completed)
 * Implement centering selected image (Completed)
 * Implement moving image (Completed)
 * Implement reset size/position on-change image (Completed)
 */

function applyImageState() {
  document.querySelector('#image-here').style.transform = `scale(${zoom}) translate(${x}px, ${y}px)`;
}

function moveImage(dx, dy) {
  x += dx * (1 / zoom);
  y += dy * (1 / zoom);
  applyImageState();
}

function loadImage(newImageIndex) {
  document.querySelector('#image-here').src = `photos/${imageInfo[newImageIndex].fileName}`;
}

function changeZoom(newZoom) {
  zoom = newZoom;
  applyImageState();
}

function resetImageState() {
  zoom = 1;
  x = 0;
  y = 0;
  applyImageState();
}

function handleOnMoveImage(event) {
  if (!(event.buttons & 1)) {
    return;
  }

  console.log(event.movementX, event.movementY);
  moveImage(event.movementX, event.movementY);
}

function handleOnClickPrev() {
  imageIndex += imageInfo.length;
  imageIndex--;
  imageIndex %= imageInfo.length;

  resetImageState();
  loadImage(imageIndex);
}

function handleOnClickNext() {
  imageIndex++;
  imageIndex %= imageInfo.length;

  resetImageState();
  loadImage(imageIndex);
}

function handleOnChangeZoom(event) {
  zoom -= (event.deltaY * 0.01);
  zoom = Math.min(Math.max(0.3, zoom), 10);
  changeZoom(zoom);
}

function init() {
  loadImage(0);
  document.querySelector('#prev-img-button').addEventListener('click', handleOnClickPrev);
  document.querySelector('#next-img-button').addEventListener('click', handleOnClickNext);
  document.querySelector('#image-controller').addEventListener('wheel', handleOnChangeZoom);
  document.querySelector('#image-controller').addEventListener('mousemove', handleOnMoveImage);
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});

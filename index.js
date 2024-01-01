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

/**
 * @todo
 * Implement on-click prev/next button
 * Implement centering selected image
 * Implement expanding/shrinking image
 * Implement moving image
 * Implement reset size/position on-change image
 */

function loadImage(newImageIndex) {
  document.querySelector('#image-here').src = `photos/${imageInfo[newImageIndex].fileName}`;
}

function handleOnClickPrev() {
  imageIndex += imageInfo.length;
  imageIndex--;
  imageIndex %= imageInfo.length;

  loadImage(imageIndex);
}

function handleOnClickNext() {
  imageIndex++;
  imageIndex %= imageInfo.length;

  loadImage(imageIndex);
}

function handleOnZoomIn() {}

function handleOnZoomOut() {}

function init() {
  loadImage(0);
  document.querySelector('#prev-img-button').addEventListener('click', handleOnClickPrev);
  document.querySelector('#next-img-button').addEventListener('click', handleOnClickNext);
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});

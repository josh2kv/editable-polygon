import { fabric } from 'fabric';
import { addElement } from './utils/addElement';

const $bindBtn = addElement(
  'button',
  'bind',
  'Bind MINIONS to BOSS',
  'controls'
);

const canvas = document.getElementById('c');
canvas.width = 600;
canvas.height = 600;
// const ctx = canvas.getContext('2d');

// ctx.translate(400, 100);
// ctx.rotate((Math.PI / 180) * 45);

// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(150, 100);
// ctx.lineTo(150, 150);
// ctx.lineTo(100, 150);
// ctx.closePath();
// ctx.stroke();
// // ctx.setTransform(1, 0, 0, 1, 0, 0);
// // Point of transform origin
// ctx.arc(0, 0, 5, 0, 2 * Math.PI);
// ctx.fillStyle = 'blue';
// ctx.fill();

// // Non-rotated rectangle
// ctx.fillStyle = 'gray';
// ctx.fillRect(100, 0, 80, 20);

// // Rotated rectangle
// ctx.rotate((45 * Math.PI) / 180);
// ctx.fillStyle = 'red';
// ctx.fillRect(100, 0, 80, 20);

// // Reset transformation matrix to the identity matrix
// ctx.setTransform(1, 0, 0, 1, 0, 0);

requestAnimationFrame(update);

// draws rotated image at x,y.
// cx, cy is the image coords you want it to rotate around
function drawSprite(image, x, y, cx, cy, rotate) {
  ctx.setTransform(1, 0, 0, 1, x, y);
  ctx.rotate(rotate);
  ctx.drawImage(image, -cx, -cy);
  ctx.setTransform(1, 0, 0, 1, 0, 0); // restore defaults
}

// function gets the direction from point to mouse and draws an image
// rotated to point at the mouse
function rotateAroundPoint(x, y, mouse) {
  const dx = mouse.x - x;
  const dy = mouse.y - y;
  const dir = Math.atan2(dy, dx);
  drawSprite(arrow, x, y, 144, 64, dir);
}

// Main animation loop.
function update(timer) {
  globalTime = timer;
  ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
  ctx.globalAlpha = 1; // reset alpha
  ctx.clearRect(0, 0, w, h);
  strokeCircle(150, 75, 10, ctx);
  rotateAroundPoint(150, 75, mouse);
  requestAnimationFrame(update);
}

//=====================================================
// All the rest is unrelated to the answer.

const ctx = canvas.getContext('2d');
const mouse = { x: 0, y: 0, button: false };
['down', 'up', 'move'].forEach(name =>
  document.addEventListener('mouse' + name, mouseEvents)
);
function mouseEvents(e) {
  mouse.bounds = canvas.getBoundingClientRect();
  mouse.x = e.pageX - mouse.bounds.left - scrollX;
  mouse.y = e.pageY - mouse.bounds.top - scrollY;
  mouse.button =
    e.type === 'mousedown' ? true : e.type === 'mouseup' ? false : mouse.button;
}
const CImage = (w = 128, h = w) => {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
};

const CImageCtx = (w = 128, h = w) => {
  const c = CImage(w, h);
  c.ctx = c.getContext('2d');
  return c;
};

const drawPath = (ctx, p) => {
  let i = 0;
  while (i < p.length) {
    ctx.lineTo(p[i++], p[i++]);
  }
};

const strokeCircle = (cx, cy, r, ctx) => {
  // if (l.p1) {
  //   c = y;
  //   r = leng(l);
  //   console.log('🚀 > leng', leng);
  //   y = l.p1.y;
  //   l = l.p1.x;
  // } else if (l.x) {
  //   c = r;
  //   r = y;
  //   y = l.y;
  //   l = l.x;
  // }
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.stroke();
};

const aW = 10;
const aH = 20;
const ind = 5;
const arrow = CImageCtx();
arrow.ctx.beginPath();
drawPath(arrow.ctx, [
  ind,
  64 - aW,
  128 - ind - aH,
  64 - aW,
  128 - ind - aH,
  64 - aH,
  128 - ind,
  64,
  128 - ind - aH,
  64 + aH,
  128 - ind - aH,
  64 + aW,
  ind,
  64 + aW,
]);
arrow.ctx.fillStyle = 'red';
arrow.ctx.fill();
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
var w = canvas.width;
var h = canvas.height;
var cw = w / 2; // center
var ch = h / 2;
var globalTime;

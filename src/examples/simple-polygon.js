import { fabric } from 'fabric';
console.log('🚀 > fabric', fabric);

// document.getElementById('rotate').addEventListener('click', Rotate);

var canvas = new fabric.Canvas('c');
// create a polygon object
var points = [
  {
    x: 200,
    y: 0,
  },
  {
    x: 100,
    y: 100,
  },
  {
    x: 50,
    y: 50,
  },
  //   {
  //     x: 100,
  //     y: 200,
  //   },
];

var polygon = new fabric.Polygon(points, {
  left: 0,
  top: 0,
  fill: '#D81B60',
  strokeWidth: 2,
  stroke: 'green',
  scaleX: 1,
  scaleY: 1,
  objectCaching: false,
  transparentCorners: false,
  cornerColor: 'blue',
});
canvas.add(polygon);
canvas.viewportTransform = [2, 0, 0, 2, 0, 0];
var mCanvas = canvas.viewportTransform;
console.log('🚀 > mCanvas', mCanvas);
var mObject = polygon.calcTransformMatrix();
// console.log('🚀 > qrDecompose', fabric.util.qrDecompose(mObject));
console.log('🚀 > mObject', mObject);
var mTotal = fabric.util.multiplyTransformMatrices(mCanvas, mObject); // inverting the order gives wrong result
console.log('🚀 > mTotal', mTotal);
// var mInverse = fabric.util.invertTransform(mTotal);
// var pointInObjectPixels = fabric.util.transformPoint(pointClicked, mInverse);
// console.log('🚀 > pointInObjectPixels', pointInObjectPixels);

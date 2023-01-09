import { fabric } from 'fabric';
import { addElement } from './utils/addElement';

const $bindBtn = addElement(
  'button',
  'bind',
  'Bind MINIONS to BOSS',
  'controls'
);

const canvas = new fabric.Canvas('c', { width: 600, height: 400 });

const points = [
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

const polygon = new fabric.Polygon(points, {
  // left: 0,
  // top: 0,
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

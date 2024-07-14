const CANVAS_SIZE = [200, 320];

const REMAINING = 10;

const SNAKE_START = [
  [12, 7],
  [12, 8],
  [12, 9],
  [12, 10],
  [12, 11],
  [12, 12],
  [12, 13],
  [12, 14],
  [12, 15],
  [12, 16],
  [13, 16],
  [14, 16],
  [15, 16],
  [16, 16],
  [17, 16],
  [17, 17],
  [17, 18],
  [17, 19],
  [17, 20],
  [17, 21],
  [17, 22],
];

const APPLE_START = [12, 3];
const SCALE = 8;
const SPEED = 100;
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
  REMAINING
};
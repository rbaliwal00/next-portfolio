"use client";

import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
  REMAINING
} from "./constants";
import Arrow from "./Arrow";

const Snake = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [remaining, setRemaining] = useState(REMAINING);

  useInterval(() => gameLoop(), speed);

  const restart = () => {
    setRemaining(REMAINING);
    endGame();
    startGame();
  }

  const endGame = () => {
    setSpeed(null);
    setRemaining(10);
    setGameOver(true);
  };

  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = newSnake => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      setRemaining(remaining - 1);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    if(remaining === 0) return;
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Create linear gradient
    const grad=context.createLinearGradient(0,0, 60,60);
    grad.addColorStop(0, "#43D9AD");
    grad.addColorStop(1, "yellow");

    // Fill rectangle with gradient
    context.fillStyle = grad;
    
    snake.forEach(([x, y], index) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "lightblue";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  return (
    <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)} className="board-container">
        <div>
      <canvas
        className="board"
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      {gameOver && <div className="game-over">GAME OVER!</div>}
      {<button onClick={startGame} className="btn btn-primary btn-start" 
      style={speed ? {opacity: "0"} : {opacity: "100"}}>start-game</button>}
      {remaining === 0 && <button onClick={restart} className="btn btn-secondary btn-start" 
        >play-again</button>}
        </div>
        {remaining === 0 && <div className="game-over">WELL DONE!</div>}
      <Arrow remaining={remaining}/>
    </div>
  );
};

export default Snake;
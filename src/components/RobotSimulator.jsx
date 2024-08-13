import { useMemo, useState } from "react";
import RobotSvg from "./RobotSvg";
import RotateIcon from "./RotateIcon";

const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];
const GRID_SIZE = 5;

const RobotSimulator = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState("NORTH");
  const [isMoving, setIsMoving] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [rotate, setRotate] = useState(0);

  const rotateLeft = () => {
    setIsRotating(true);
    const currentIndex = DIRECTIONS.indexOf(direction);
    const newIndex = (currentIndex + 3) % 4;
    setDirection(DIRECTIONS[newIndex]);
    setTimeout(() => setIsRotating(false), 300); // Match the animation duration
    setRotate((prev) => {
      return prev - 90;
    });
  };

  const rotateRight = () => {
    setIsRotating(true);
    const currentIndex = DIRECTIONS.indexOf(direction);
    const newIndex = (currentIndex + 1) % 4;
    setDirection(DIRECTIONS[newIndex]);
    setRotate((prev) => {
      return prev + 90;
    });
    setTimeout(() => setIsRotating(false), 300); // Match the animation duration
  };

  const moveForward = () => {
    setIsMoving(true);
    let { x, y } = position;
    switch (direction) {
      case "NORTH":
        if (y < GRID_SIZE - 1) y += 1;
        break;
      case "EAST":
        if (x < GRID_SIZE - 1) x += 1;
        break;
      case "SOUTH":
        if (y > 0) y -= 1;
        break;
      case "WEST":
        if (x > 0) x -= 1;
        break;
      default:
        break;
    }
    setPosition({ x, y });
    setTimeout(() => setIsMoving(false), 300); // Match the animation duration
  };

  return (
    <div className="robot-simulator">
      <h1>Bellroy Robot</h1>
      <div className="grid">
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
          const cellIndex = position.x + position.y * GRID_SIZE;
          return (
            <div
              key={index}
              className={`grid-cell ${cellIndex === index ? "robot" : ""}`}
            >
              {cellIndex === index && (
                <div
                  className={`robot-icon robot-${direction.toLowerCase()} ${
                    isMoving ? "moving" : ""
                  } ${isRotating ? "rotating" : ""}`}
                  style={{
                    transform: `rotate(${rotate}deg)`,
                  }}
                >
                  {cellIndex === index && <RobotSvg />}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="controls">
        <button
          className="flex justify-center align-center"
          onClick={rotateLeft}
        >
          <span>Rotate Left</span>
          <RotateIcon className="w-5 scaleX1" />
        </button>
        <button onClick={moveForward} className="move">
          Move Forward
        </button>
        <button
          className="flex justify-center align-center"
          onClick={rotateRight}
        >
          Rotate Right
          <RotateIcon className="w-5" />
        </button>
      </div>
    </div>
  );
};

export default RobotSimulator;

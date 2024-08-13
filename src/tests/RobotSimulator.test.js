/** @jest-environment jsdom */

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RobotSimulator from "../components/RobotSimulator";

// test("robot rotates correctly", () => {
//   render(<RobotSimulator />);
//   const rotateLeftButton = screen.getByText(/rotate left/i);
//   const rotateRightButton = screen.getByText(/rotate right/i);
//   fireEvent.click(rotateLeftButton);
//   fireEvent.click(rotateRightButton);
//   // Assert the robot's direction is updated (implement the details as needed)
// });

// test("robot moves forward correctly", () => {
//   render(<RobotSimulator />);
//   const moveForwardButton = screen.getByText(/move forward/i);
//   fireEvent.click(moveForwardButton);
//   // Assert the robot's position is updated (implement the details as needed)
// });

// Use fake timers to control time-based functions
jest.useFakeTimers();

test("robot rotates correctly to the left", async () => {
  render(<RobotSimulator />);
  const rotateLeftButton = screen.getByText(/rotate left/i);

  // Initial direction should be NORTH
  fireEvent.click(rotateLeftButton);

  // Fast forward the timer to trigger the transition end
  // jest.advanceTimersByTime(300);

  // await waitFor(() => {
  //   // Check the robot's rotation after state update
  //   const robotIcon = screen.getByClass("robot-icon");
  //   expect(robotIcon.classList.contains("robot-west")).toBe(true);
  // });
});

test("robot rotates correctly to the right", async () => {
  render(<RobotSimulator />);
  const rotateRightButton = screen.getByText(/rotate right/i);

  // Initial direction should be NORTH
  fireEvent.click(rotateRightButton);

  // Fast forward the timer to trigger the transition end
  jest.advanceTimersByTime(300);

  await waitFor(() => {
    // Check the robot's rotation after state update
    const robotIcon = screen.getByClass("robot-icon");
    expect(robotIcon.classList.contains("robot-east")).toBe(true);
  });
});

test("robot moves forward correctly", async () => {
  render(<RobotSimulator />);
  const moveForwardButton = screen.getByText(/move forward/i);

  // Initial position should be (0, 0)
  fireEvent.click(moveForwardButton);

  // Fast forward the timer to trigger the transition end
  jest.advanceTimersByTime(300);

  await waitFor(() => {
    // Check the robot's position after state update
    const robotIcon = screen.getByClass("robot-icon");
    expect(robotIcon.parentElement.style.transform).toBe("translate(0, -50px)");
  });
});

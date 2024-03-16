import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";
import MoodSelector from "./components/MoodSelector";
describe("MoodSelector component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<MoodSelector />);
    expect(getByText("Select your mood")).toBeInTheDocument();
  });

  it("displays mood buttons", () => {
    const { getByText } = render(<MoodSelector />);
    expect(getByText("😊")).toBeInTheDocument();
    expect(getByText("😢")).toBeInTheDocument();
    expect(getByText("😡")).toBeInTheDocument();
    // Add more assertions for other mood buttons if needed
  });

  it("selects mood when button is clicked", () => {
    const handleMoodSubmit = jest.fn();
    const { getByText } = render(<MoodSelector onSelect={handleMoodSubmit} />);

    fireEvent.click(getByText("😊"));
    expect(handleMoodSubmit).toHaveBeenCalledWith("happy");

    fireEvent.click(getByText("😢"));
    expect(handleMoodSubmit).toHaveBeenCalledWith("sad");

    fireEvent.click(getByText("😡"));
    expect(handleMoodSubmit).toHaveBeenCalledWith("angry");
    // Add more assertions for other mood buttons if needed
  });

  // Add more tests for other functionalities as needed
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("should render the fallback text when provided a fallback string and no valid src", async () => {
    const fallbackText = "B"; // The fallback text you want to test

    render(
      <Avatar fallback={fallbackText} />
    );

    // Ensure the fallback text is rendered
    const fallback = screen.getByText(fallbackText);
    expect(fallback).toBeInTheDocument();
  });
});


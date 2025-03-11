import StarsFromRatings from "../src/components/Stars.jsx";
import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("StarsFromRatings component", () => {
    it("renders stars", () => {
        render(<StarsFromRatings rating={5} />);
        expect(screen.getByTestId("stars")).toBeInTheDocument();
    });
});

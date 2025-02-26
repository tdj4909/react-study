import {render, screen, fireEvent} from "@testing-library/react";
import Counter from "./Counter";
import { expect, test } from "vitest";

test("버튼을 클릭하면 카운트가 증가해야 한다", async () => {
    render(<Counter />);

    const button = screen.getByText("+1 증가");
    fireEvent.click(button);

    const counterText = await screen.findByText("현재 카운트: 1");
    expect(counterText).toBeInTheDocument();
});
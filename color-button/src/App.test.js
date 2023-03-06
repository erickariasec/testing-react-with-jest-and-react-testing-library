import { render, screen, logRoles } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  const { container } = render(<App />);
  logRoles(container);

  // find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", { name: /change to blue/i });

  // expect the background color to be "red"
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {});

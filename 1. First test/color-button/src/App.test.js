import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // creates virtual Dom
  render(<App />);
  const linkElement = screen.getByText(/learn React/i); // this text has to match  whit the react app text
  // global
  expect(linkElement).toBeInTheDocument();
});

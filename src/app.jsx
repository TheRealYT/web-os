import * as React from "react";
import { createRoot } from "react-dom/client";

const root = document.createElement("div");
document.body.appendChild(root);

function render() {
  createRoot(root).render(<h2>Hello from React!</h2>);
}

render();

import * as React from "react";
import { createRoot } from "react-dom/client";

function render() {
  const root = document.createElement("div");
  document.body.appendChild(root);

  createRoot(root).render(App());
}

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-semibold">WebOS</h1>
      <p className="text-sm mt-5">Hello, {os.username}</p>
    </div>
  );
}

render();

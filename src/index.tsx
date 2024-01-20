import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./one-word/button";

// alert(1);

export { Button as DS };

export default {
  myTest: () => alert(90),
};

ReactDOM.createRoot(document.querySelector(".app")!).render(
  <React.StrictMode>
    <>
      <h2>One Word</h2>
      <p>
        This is a temporary location to place components for{" "}
        <strong>One Word project</strong>
      </p>
      <Button>create</Button>
    </>
  </React.StrictMode>
);

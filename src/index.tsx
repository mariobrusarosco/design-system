import { Button } from "@/one-word/components/button";
import "./global.css";

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.querySelector(".app")!).render(
  <React.StrictMode>
    <>
      <h2 className="text-sm">One Word</h2>
      <p>
        This is a temporary location to place components for{" "}
        <strong>One Word project</strong>
      </p>
      <Button>create</Button>
    </>
  </React.StrictMode>
);

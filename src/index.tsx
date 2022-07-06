import { StrictMode } from "react";
import { GlobalStyle } from "./stylesheet/GlobalStyle";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);

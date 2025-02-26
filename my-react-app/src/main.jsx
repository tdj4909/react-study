import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <App />
    <Footer />
  </div>
);
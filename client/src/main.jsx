import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider 
      domain = "dev-r1sp8n0dygjcu7a8.uk.auth0.com"
      clientId = "9ZIK69K3qhFZXlXoUODoDXzDWkqUBxmT"
      authorizationParams = {{
        redirect_uri: "http://localhost:5173"
      }}
      audience = "http://localhost:8000"
      scope = "openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

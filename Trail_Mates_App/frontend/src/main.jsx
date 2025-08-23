import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TrailMates from "./TrailMates.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{ 
        redirect_uri: 'http://localhost:5173/dashboard',
        audience: import.meta.env.AUDIENCE }}
    >
      <BrowserRouter>
      <TrailMates />
      </BrowserRouter>
      </Auth0Provider>
      </StrictMode>,
);

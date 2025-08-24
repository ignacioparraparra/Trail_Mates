import { useAuth0 } from "@auth0/auth0-react";
import "./styles/button.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="gbutton" onClick={() => loginWithRedirect()}>Plan Trip</button>;
};

export default LoginButton;
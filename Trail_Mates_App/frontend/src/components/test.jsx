// Frontend (React)
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export default function CallApiButton() {
  const { getAccessTokenSilently, loginWithPopup, isAuthenticated } = useAuth0();
  const audience = 'https://trailmates/api'; // EXACTLY your API Identifier
  const scope = 'read:trips';

  const callApi = async () => {
    try {
      if (!isAuthenticated) {
        // one-time interactive consent if needed
        await loginWithPopup({ authorizationParams: { audience } });
      }

      const token = await getAccessTokenSilently({
        authorizationParams: { audience } // + scope if your API requires it
      });

      const res = await axios.get('http://localhost:3000/trips/api/private', {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log(res.data);
    } catch (e) {
      console.error('API call failed:', e);
    }
  };

  return <button onClick={callApi}>Call protected API</button>;
}

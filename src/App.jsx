import { Routes, Route, useNavigate } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, LoginCallback } from '@okta/okta-react';
import Home from './Home';
import Profile from './Profile';
import Admin from './Admin';
import { OKTA_CONFIG } from './utils/authUtils';

const oktaAuth = new OktaAuth(OKTA_CONFIG);

function App() {
  const navigate = useNavigate();
  const restoreOriginalUri = (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login/callback" element={<LoginCallback />} />
      </Routes>
    </Security>
  );
}

export default App;

// src/hooks/useAuthCheck.jsx
import { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { checkAdminRole, AUTH_STATES } from '../utils/authUtils';

export const useAuthCheck = (requiredRole = null) => {
  const { authState, oktaAuth } = useOktaAuth();
  const [authStatus, setAuthStatus] = useState({
    state: AUTH_STATES.LOADING,
    userInfo: null,
    isAdmin: false
  });

  useEffect(() => {
    const checkAuth = async () => {
      if (!authState) return;
      if (!authState.isAuthenticated) {
        setAuthStatus({ state: AUTH_STATES.UNAUTHENTICATED });
        return;
      }

      const userInfo = await oktaAuth.getUser();
      const isAdmin = checkAdminRole(userInfo);
      
      setAuthStatus({
        state: requiredRole && !isAdmin ? AUTH_STATES.UNAUTHORIZED : AUTH_STATES.AUTHENTICATED,
        userInfo,
        isAdmin
      });
    };

    checkAuth();
  }, [authState, oktaAuth, requiredRole]);

  return authStatus;
};
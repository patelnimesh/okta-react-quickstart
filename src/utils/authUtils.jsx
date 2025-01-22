export const OKTA_CONFIG = {
  issuer: import.meta.env.VITE_OKTA_ISSUER,
  clientId: import.meta.env.VITE_OKTA_CLIENT_ID,
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

export const checkAdminRole = (userInfo) => {
  return userInfo?.loyalty_group?.includes('loyalty_admin') || false;
};

export const AUTH_STATES = {
  LOADING: 'LOADING',
  UNAUTHORIZED: 'UNAUTHORIZED',
  UNAUTHENTICATED: 'UNAUTHENTICATED',
  AUTHENTICATED: 'AUTHENTICATED'
};
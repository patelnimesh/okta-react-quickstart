import { Loading } from './Loading';
import { AuthLayout, AuthNav, NonAuthLayout } from './AuthLayout';
import { AUTH_STATES } from '../utils/authUtils';
import { useAuthCheck } from '../hooks/useAuthCheck';

export const ProtectedRoute = ({ children, requiredRole }) => {
  const { state, userInfo } = useAuthCheck(requiredRole);

  if (state === AUTH_STATES.LOADING) {
    return <Loading />;
  }

  if (state === AUTH_STATES.UNAUTHENTICATED) {
    return (
      <NonAuthLayout title="Authentication Required">
        <p>Please log in to access this page.</p>
      </NonAuthLayout>
    );
  }

  if (state === AUTH_STATES.UNAUTHORIZED) {
    return (
      <AuthLayout title="Access Denied">
        <p>Sorry, you don't have permission to access this page.</p>
        {/* <AuthNav /> */}
      </AuthLayout>
    );
  }

  return children;
};
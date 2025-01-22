import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthLayout } from './components/AuthLayout';
import { useAuthCheck } from './hooks/useAuthCheck';

const UserProfile = () => {
  const { userInfo } = useAuthCheck();

  if (!userInfo) {
    return <AuthLayout title="My User Profile">Loading user info...</AuthLayout>;
  }

  return (
    <AuthLayout title="My User Profile">
      <table>
        <thead>
          <tr>
            <th>Claim</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(userInfo).map(([claim, value]) => (
            <tr key={claim}>
              <td>{claim}</td>
              <td>{value.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AuthLayout>
  );
};

const Profile = () => (
  <ProtectedRoute>
    <UserProfile />
  </ProtectedRoute>
);

export default Profile;
import { useAuthCheck } from './hooks/useAuthCheck';
import { AuthLayout } from './components/AuthLayout';
import { ProtectedRoute } from './components/ProtectedRoute';

const AdminDashboard = () => {
  const { userInfo } = useAuthCheck('loyalty_admin');
  
  if (!userInfo) {
    return <AuthLayout title="Admin Dashboard">Loading user info...</AuthLayout>;
  }
  
  return (
    <AuthLayout title="Admin Dashboard">
      <p>Welcome {userInfo.name} to the admin area.</p>
      <p>Here you can manage users, rewards, and more.</p>
      <p>This page is only accessible to users with the loyalty_admin role.</p>
    </AuthLayout>
  );
};

const Admin = () => (
  <ProtectedRoute requiredRole="loyalty_admin">
    <AdminDashboard />
  </ProtectedRoute>
);

export default Admin;
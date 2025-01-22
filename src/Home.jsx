import { useOktaAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      if (authState?.isAuthenticated) {
        const info = await oktaAuth.getUser();
        setUserInfo(info);
        setIsAdmin(info.loyalty_group?.includes('loyalty_admin'));
      }
    };
    getUserInfo();
  }, [authState, oktaAuth]);

  const login = () => oktaAuth.signInWithRedirect();
  const logout = () => oktaAuth.signOut();

  if (!authState) {
    return <div>Loading authentication...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Customer Loyalty Portal</h1>
      {authState.isAuthenticated ? (
        <div>
          <p>You are logged in!</p>
          {userInfo && (
            <div>
              <h2>User Information</h2>
              <p>Name: {userInfo.name}</p>
              <p>Email: {userInfo.email}</p>
              <p>Username: {userInfo.preferred_username}</p>
            </div>
          )}
          <nav style={{ 
            marginTop: '20px', 
            marginBottom: '20px',
            display: 'flex',
            gap: '10px'
          }}>
            <Link to="/profile">View Profile</Link>
            {isAdmin && <Link to="/admin">Admin Dashboard</Link>}
          </nav>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Not logged in yet</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Home;
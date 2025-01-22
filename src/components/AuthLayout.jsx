import { Link } from 'react-router-dom';

export const AuthLayout = ({ children, title }) => (
    <div style={{ padding: '20px' }}>
        <h2>{title}</h2>
        {children}
        <nav style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    </div>
);

export const AuthNav = () => (
    <nav style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
    </nav>
);

export const NonAuthLayout = ({children, title}) => (
    <div style={{ padding: '20px' }}>
        <h2>{title}</h2>
        {children}
        <nav style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            <Link to="/">Home</Link>
        </nav>
    </div>
);

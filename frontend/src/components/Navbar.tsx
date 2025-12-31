
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/auth");
    };
    const handleWorkBench = () => {
        navigate("/workbench");
    };
    return (
        <nav
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1.5rem',
                width: '100%',
                boxSizing: 'border-box',
                minHeight: '56px',
                borderBottom: '1px solid #eee',
                position: 'relative',
                flexWrap: 'wrap',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 100
            }}
        >
            <div
                onClick={() => navigate("/")}
                style={{
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    flex: '0 0 auto',
                    fontFamily: 'Segoe UI, Arial, sans-serif',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#222',
                    userSelect: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                }}
                title="Go to Home"
            >
                Prunr
            </div>
            <div style={{ flex: '1 1 auto' }} />
            <button
                onClick={handleWorkBench}
                style={{
                    border: '1px solid #ccc',
                    background: '#e6f7ff',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: '6px 16px',
                    minWidth: '110px',
                    marginLeft: 'auto',
                    marginRight: '12px',
                    transition: 'background 0.2s',
                    flex: '0 0 auto',
                    maxWidth: '100%'
                }}
            >
                WorkBench
            </button>
            <button
                onClick={handleLogin}
                style={{
                    border: '1px solid #ccc',
                    background: '#f8f8f8',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: '6px 16px',
                    minWidth: '80px',
                    transition: 'background 0.2s',
                    flex: '0 0 auto',
                    maxWidth: '100%'
                }}
            >
                Login
            </button>
        </nav>
    );
};

export default Navbar
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);       // profile dropdown
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  /* CLOSE DROPDOWNS ON OUTSIDE CLICK 🔥 */
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".navbar")) {
        setOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (

    <nav className="navbar">

      {/* LEFT: HAMBURGER */}
      <div
        className="menu-toggle"
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
        }}
      >
        ☰
      </div>

      {/* LOGO */}
      <h2 className="logo">⚖️ AI Legal Advisor</h2>

      {/* NAV LINKS */}
      <div
        className={`nav-links ${menuOpen ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/features" onClick={() => setMenuOpen(false)}>Features</Link>
        <Link to="/advisor" onClick={() => setMenuOpen(false)}>Advisor</Link>
        <Link to="/analyze" onClick={() => setMenuOpen(false)}>Analyzer</Link>
        <Link to="/history" onClick={() => setMenuOpen(false)}>History</Link>

        {!user && (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link>
          </>
        )}
      </div>

      {/* PROFILE RIGHT */}
      {user && (
        <div
          className="nav-profile"
          onClick={(e) => e.stopPropagation()}
        >

          <div
            className="avatar"
            onClick={() => setOpen(!open)}
          >
            {user.name?.charAt(0).toUpperCase()}
          </div>

          {open && (
            <div className="profile-dropdown">

              <div className="dropdown-user">
                {user.name}
              </div>

              <Link to="/profile" onClick={() => setOpen(false)}>
                Profile
              </Link>

              <button onClick={logout}>
                Logout
              </button>

            </div>
          )}

        </div>
      )}

    </nav>
  );
}

export default Navbar;
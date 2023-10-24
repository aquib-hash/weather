import React from 'react';
import './Navbar.css';

function Navbar({ toggleTheme, isDarkMode }) {
  return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
          <div>
              <input type="text" placeholder="Search city..." style={{ padding: '5px 10px', marginRight: '10px' }} />
              <button style={{ padding: '5px 15px' }}>🔍</button>
          </div>
          <div>
              <span style={{ marginRight: '15px' }} onClick={toggleTheme}>
                  {isDarkMode ? "🌙" : "☀️"} {/* Toggle icon */}
              </span>
              <span>👤</span>
          </div>
      </div>
  );
}

export default Navbar;
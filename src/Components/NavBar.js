import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/logs">Logs</Link>
      </h1>
      <button>
        <Link to="/logs/new">New Logs</Link>
      </button>
    </nav>
  );
}

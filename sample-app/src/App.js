// src/App.js
import './App.css';
import React from 'react';
import UserDashboard from './components/UserDashboard/UserDashboard';

function App() {
  return (
    <div className="App">
      <div className="relative isolate bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">User lists</h1>
          <UserDashboard />
        </div>
      </div>
    </div>
  );
}

export default App;

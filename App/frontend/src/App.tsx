import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FeedbackForm from './pages/FeedbackForm';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-blue-600 text-white p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Feedback System</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:text-blue-200 transition">Submit Feedback</Link>
              <Link to="/dashboard" className="hover:text-blue-200 transition">Dashboard</Link>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<FeedbackForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

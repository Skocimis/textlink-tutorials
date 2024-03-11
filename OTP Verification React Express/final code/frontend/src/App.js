import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import VerificationForm from './screens/VerificationForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/verification" element={<VerificationForm />} />
        {/* Redirect to register by default */}
        <Route path="*" element={<Navigate replace to="/register" />} />
      </Routes>
    </Router>
  );
}

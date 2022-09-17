import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App_420 from './v4.2.0';

class App extends React.Component {
  render() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/v4.2.0" />} />
        <Route path="/v4.2.0/*" element={<App_420 />} />
      </Routes>
    </Router>
    )
  }
}

export default App;
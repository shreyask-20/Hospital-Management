import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard'; // Import the Dashboard component

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header /> {/* Header will now include Quick Links */}
                <div className="layout">
                    <Sidebar />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Dashboard />} /> {/* Default route */}
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;

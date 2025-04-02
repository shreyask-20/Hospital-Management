import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Recents from './components/Recents'; // Import Recents component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <div className="layout">
                    <Sidebar />
                    <div className="content">
                        <Routes>
                            {/* Add route for Recents */}
                            <Route path="/recents" element={<Recents />} />
                            {/* Add other routes here */}
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;

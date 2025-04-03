import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Recents from './components/Recents'; // Import Recents component
import DoctorsList from './components/DoctorsList'; // Import DoctorsList component
import AddDoctor from "./components/AddDoctor";
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
                            {/* Add route for DoctorsList */}
                            <Route path="/doctors" element={<DoctorsList />} />
                            <Route path="/add-doctor" element={<AddDoctor />} />
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
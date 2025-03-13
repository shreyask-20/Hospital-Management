import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import { BrowserRouter as Router } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header /> {/* Header will now include Quick Links */}
                <div className="layout">
                    <Sidebar />
                    <div className="content">
                        {/* Remove Navbar from here — Header already has everything */}
                        {/* Later others can add pages here if they want */}
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App;

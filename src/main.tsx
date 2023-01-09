import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './views/admin/Admin';

import './index.css';
import App from './App';
import FindCampaign from './views/FindCampaign';
import DetailCampaign from './views/DetailCampaign';
import Profile from './views/Profile';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <App>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/campaign/:id" element={<DetailCampaign />} />
                    <Route path="/explore" element={<FindCampaign />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </App>
        </Router>
    </React.StrictMode>
);

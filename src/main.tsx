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
import ProfileContent from './components/layout/profile/profileContent';

import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <App>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/campaign/:id" element={<DetailCampaign />} />
                    <Route path="/explore" element={<FindCampaign />} />
                    <Route
                        path="/profile"
                        element={
                            <Profile>
                                <ProfileContent page="Profil" />
                            </Profile>
                        }
                    />
                    <Route
                        path="/profile/my-campaign"
                        element={
                            <Profile>
                                <ProfileContent page="Campaign Anda" />
                            </Profile>
                        }
                    />
                    <Route
                        path="/profile/my-campaign/create"
                        element={
                            <Profile>
                                <ProfileContent page="Buat Campaign" />
                            </Profile>
                        }
                    />
                    <Route
                        path="/profile/transaction-history"
                        element={
                            <Profile>
                                <ProfileContent page="Riwayat Transaksi" />
                            </Profile>
                        }
                    />
                    <Route
                        path="/profile/settings"
                        element={
                            <Profile>
                                <ProfileContent page="Pengaturan Akun" />
                            </Profile>
                        }
                    />
                </Routes>
            </App>
        </Router>
    </React.StrictMode>
);
